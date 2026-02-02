'use client'

import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from 'react-simple-maps'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// Marker locations with coordinates
const markers = [
  { name: "India (HQ)", coordinates: [78.9629, 20.5937], isHQ: true, countries: "HQ" },
  { name: "North America", coordinates: [-100.0, 45.0], countries: 5 },
  { name: "South America", coordinates: [-58.0, -15.0], countries: 8 },
  { name: "Europe", coordinates: [15.0, 50.0], countries: 12 },
  { name: "Middle East", coordinates: [45.0, 28.0], countries: 10 },
  { name: "Africa", coordinates: [20.0, 5.0], countries: 15 },
  { name: "Southeast Asia", coordinates: [105.0, 15.0], countries: 8 },
  { name: "Oceania", coordinates: [135.0, -25.0], countries: 3 },
]

// India HQ coordinates for connection lines
const indiaCoords = [78.9629, 20.5937]

function WorldMap() {
  const [activeMarker, setActiveMarker] = useState(null)

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden shadow-xl border border-gray-200">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 130,
          center: [40, 20]
        }}
        style={{ width: "100%", height: "auto" }}
      >
        {/* Map Background */}
        <rect x="-50" y="-50" width="900" height="500" fill="#e8f4fc" />
        
        {/* Countries */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isIndia = geo.properties.name === "India"
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isIndia ? "#FF7F00" : "#0055CC"}
                  stroke="#ffffff"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      fill: isIndia ? "#FF7F00" : "#0055CC",
                      opacity: isIndia ? 0.9 : 0.7,
                      outline: "none",
                      transition: "all 0.3s"
                    },
                    hover: {
                      fill: isIndia ? "#FF7F00" : "#FF7F00",
                      opacity: 1,
                      outline: "none",
                      cursor: "pointer"
                    },
                    pressed: {
                      fill: "#003d99",
                      outline: "none"
                    }
                  }}
                />
              )
            })
          }
        </Geographies>

        {/* Connection Lines from India */}
        {markers.filter(m => !m.isHQ).map((marker, index) => (
          <Line
            key={index}
            from={indiaCoords}
            to={marker.coordinates}
            stroke="#FF7F00"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeDasharray="5,3"
            strokeOpacity={0.6}
          />
        ))}

        {/* Markers */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinates={marker.coordinates}
            onMouseEnter={() => setActiveMarker(marker.name)}
            onMouseLeave={() => setActiveMarker(null)}
          >
            {/* Pulsing ring for HQ */}
            {marker.isHQ && (
              <circle
                r={12}
                fill="#FF7F00"
                opacity={0.3}
                className="animate-ping"
              />
            )}
            
            {/* Main marker */}
            <circle
              r={marker.isHQ ? 8 : 6}
              fill={marker.isHQ ? "#FF7F00" : "#0055CC"}
              stroke="#ffffff"
              strokeWidth={2}
              style={{ cursor: "pointer", transition: "all 0.3s" }}
              className="hover:scale-150"
            />
            
            {/* Inner dot */}
            <circle
              r={marker.isHQ ? 3 : 2}
              fill="#ffffff"
            />
          </Marker>
        ))}
      </ComposableMap>

      {/* Tooltips rendered outside SVG for better styling */}
      {markers.map((marker, index) => (
        <motion.div
          key={index}
          className={`absolute px-4 py-2 bg-white rounded-xl shadow-2xl border border-gray-100 pointer-events-none z-20 transition-all duration-300 ${
            activeMarker === marker.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            left: `${((marker.coordinates[0] + 180) / 360) * 100}%`,
            top: `${((90 - marker.coordinates[1]) / 180) * 100 - 15}%`,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="font-bold text-gray-900 text-sm whitespace-nowrap">{marker.name}</div>
          {marker.isHQ ? (
            <div className="text-xs text-[#FF7F00] font-semibold">🏭 Manufacturing HQ</div>
          ) : (
            <div className="text-xs text-[#0055CC] font-semibold">{marker.countries} Countries</div>
          )}
        </motion.div>
      ))}

      {/* Stats Card */}
      <motion.div 
        className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="text-3xl font-bold text-[#0055CC]">45+</div>
        <div className="text-sm text-gray-600">Countries Served</div>
        <div className="flex gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i} 
              className="w-2 h-2 rounded-full bg-[#FF7F00]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div 
        className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg border border-gray-100"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 bg-[#0055CC] rounded" />
          <span className="text-gray-600">Export Countries</span>
        </div>
        <div className="flex items-center gap-2 text-xs mt-1.5">
          <div className="w-3 h-3 bg-[#FF7F00] rounded" />
          <span className="text-gray-600">India - HQ</span>
        </div>
        <div className="flex items-center gap-2 text-xs mt-1.5">
          <div className="w-3 h-3 border-2 border-dashed border-[#FF7F00] rounded" />
          <span className="text-gray-600">Trade Routes</span>
        </div>
      </motion.div>

      {/* HQ Label */}
      <motion.div
        className="absolute bg-gradient-to-r from-[#FF7F00] to-[#e67300] text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl"
        style={{ left: '62%', top: '42%' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        🇮🇳 MD PET India
      </motion.div>
    </div>
  )
}

export default memo(WorldMap)
