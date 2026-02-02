import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'

// MongoDB connection
let client
let db

async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db(process.env.DB_NAME)
  }
  return db
}

// Helper function to handle CORS
function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

// Route handler function
async function handleRoute(request, { params }) {
  const { path = [] } = params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    const db = await connectToMongo()

    // Root endpoint - GET /api/
    if ((route === '/' || route === '/root') && method === 'GET') {
      return handleCORS(NextResponse.json({ 
        message: "MD PET API",
        version: "1.0.0",
        endpoints: [
          "GET /api/ - API info",
          "POST /api/enquiry - Submit enquiry",
          "GET /api/enquiries - Get all enquiries"
        ]
      }))
    }

    // Enquiry endpoint - POST /api/enquiry
    if (route === '/enquiry' && method === 'POST') {
      const body = await request.json()
      
      // Validate required fields
      if (!body.name || !body.email || !body.phone || !body.message) {
        return handleCORS(NextResponse.json(
          { error: "Name, email, phone, and message are required" }, 
          { status: 400 }
        ))
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(body.email)) {
        return handleCORS(NextResponse.json(
          { error: "Invalid email format" }, 
          { status: 400 }
        ))
      }

      const enquiry = {
        id: uuidv4(),
        name: body.name,
        email: body.email,
        phone: body.phone,
        company: body.company || '',
        product: body.product || 'general',
        message: body.message,
        status: 'new',
        createdAt: new Date(),
        updatedAt: new Date()
      }

      await db.collection('enquiries').insertOne(enquiry)
      
      // Remove MongoDB _id from response
      const { _id, ...cleanEnquiry } = enquiry
      
      return handleCORS(NextResponse.json({
        success: true,
        message: "Enquiry submitted successfully. Our team will contact you within 24 hours.",
        data: cleanEnquiry
      }))
    }

    // Get all enquiries - GET /api/enquiries
    if (route === '/enquiries' && method === 'GET') {
      const enquiries = await db.collection('enquiries')
        .find({})
        .sort({ createdAt: -1 })
        .limit(100)
        .toArray()

      // Remove MongoDB's _id field from response
      const cleanedEnquiries = enquiries.map(({ _id, ...rest }) => rest)
      
      return handleCORS(NextResponse.json({
        success: true,
        count: cleanedEnquiries.length,
        data: cleanedEnquiries
      }))
    }

    // Get single enquiry - GET /api/enquiry/:id
    if (route.startsWith('/enquiry/') && method === 'GET') {
      const id = path[1]
      const enquiry = await db.collection('enquiries').findOne({ id })
      
      if (!enquiry) {
        return handleCORS(NextResponse.json(
          { error: "Enquiry not found" }, 
          { status: 404 }
        ))
      }
      
      const { _id, ...cleanEnquiry } = enquiry
      return handleCORS(NextResponse.json({
        success: true,
        data: cleanEnquiry
      }))
    }

    // Update enquiry status - PUT /api/enquiry/:id
    if (route.startsWith('/enquiry/') && method === 'PUT') {
      const id = path[1]
      const body = await request.json()
      
      const result = await db.collection('enquiries').updateOne(
        { id },
        { 
          $set: { 
            status: body.status || 'contacted',
            updatedAt: new Date()
          } 
        }
      )
      
      if (result.matchedCount === 0) {
        return handleCORS(NextResponse.json(
          { error: "Enquiry not found" }, 
          { status: 404 }
        ))
      }
      
      return handleCORS(NextResponse.json({
        success: true,
        message: "Enquiry updated successfully"
      }))
    }

    // Status endpoints - POST /api/status
    if (route === '/status' && method === 'POST') {
      const body = await request.json()
      
      if (!body.client_name) {
        return handleCORS(NextResponse.json(
          { error: "client_name is required" }, 
          { status: 400 }
        ))
      }

      const statusObj = {
        id: uuidv4(),
        client_name: body.client_name,
        timestamp: new Date()
      }

      await db.collection('status_checks').insertOne(statusObj)
      return handleCORS(NextResponse.json(statusObj))
    }

    // Status endpoints - GET /api/status
    if (route === '/status' && method === 'GET') {
      const statusChecks = await db.collection('status_checks')
        .find({})
        .limit(1000)
        .toArray()

      // Remove MongoDB's _id field from response
      const cleanedStatusChecks = statusChecks.map(({ _id, ...rest }) => rest)
      
      return handleCORS(NextResponse.json(cleanedStatusChecks))
    }

    // Route not found
    return handleCORS(NextResponse.json(
      { error: `Route ${route} not found` }, 
      { status: 404 }
    ))

  } catch (error) {
    console.error('API Error:', error)
    return handleCORS(NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    ))
  }
}

// Export all HTTP methods
export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute
