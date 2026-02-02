'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const regions = [
  { id: 'na', name: 'North America', x: '18%', y: '32%', countries: 5 },
  { id: 'sa', name: 'South America', x: '28%', y: '65%', countries: 8 },
  { id: 'eu', name: 'Europe', x: '48%', y: '28%', countries: 12 },
  { id: 'af', name: 'Africa', x: '50%', y: '52%', countries: 15 },
  { id: 'me', name: 'Middle East', x: '58%', y: '38%', countries: 10 },
  { id: 'as', name: 'Asia', x: '72%', y: '35%', countries: 12 },
  { id: 'oc', name: 'Oceania', x: '82%', y: '65%', countries: 3 },
]

export default function WorldMap() {
  const [activeRegion, setActiveRegion] = useState(null)

  return (
    <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden shadow-xl border border-gray-200">
      {/* Actual World Map SVG */}
      <svg
        viewBox="0 0 1200 600"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ocean Background */}
        <rect width="1200" height="600" fill="#e8f4fc" />
        
        {/* Grid Lines */}
        <g stroke="#d0e8f5" strokeWidth="0.5" opacity="0.5">
          {[...Array(12)].map((_, i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" />
          ))}
          {[...Array(6)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
          ))}
        </g>

        {/* North America */}
        <motion.path
          d="M120,120 L180,100 L240,95 L300,100 L340,130 L350,160 L340,200 L300,240 L280,280 L240,300 L200,290 L160,260 L140,220 L120,180 Z M180,300 L220,310 L250,340 L240,380 L200,400 L160,380 L150,340 L160,310 Z"
          fill="#0055CC"
          opacity="0.7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          whileHover={{ opacity: 1, fill: "#FF7F00" }}
        />

        {/* South America */}
        <motion.path
          d="M240,380 L280,370 L320,390 L340,440 L330,500 L300,540 L260,550 L230,520 L220,470 L230,420 Z"
          fill="#0055CC"
          opacity="0.7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ opacity: 1, fill: "#FF7F00" }}
        />

        {/* Europe */}
        <motion.path
          d="M480,100 L520,90 L580,95 L620,110 L640,140 L630,180 L600,200 L560,210 L520,200 L490,180 L480,140 Z M500,210 L540,220 L560,250 L540,280 L500,280 L480,250 Z"
          fill="#0055CC"
          opacity="0.7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ opacity: 1, fill: "#FF7F00" }}
        />

        {/* Africa */}
        <motion.path
          d="M500,280 L560,270 L620,290 L650,340 L660,400 L640,460 L600,500 L540,510 L490,480 L470,420 L480,360 L490,310 Z"
          fill="#0055CC"
          opacity="0.7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ opacity: 1, fill: "#FF7F00" }}
        />

        {/* Middle East */}
        <motion.path
          d="M620,200 L680,190 L720,210 L740,250 L720,290 L680,300 L640,280 L620,240 Z"
          fill="#0055CC"
          opacity="0.7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ opacity: 1, fill: "#FF7F00" }}
        />

        {/* Asia */}
        <motion.path
          d="M680,80 L780,60 L880,80 L960,120 L1000,180 L980,260 L920,320 L840,340 L760,320 L700,280 L680,220 L660,160 L680,120 Z M820,340 L880,350 L920,390 L900,440 L840,450 L800,420 L810,380 Z"
          fill="#0055CC"
          opacity="0.7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ opacity: 1, fill: "#FF7F00" }}
        />

        {/* India - Highlighted */}
        <motion.path
          d="M740,260 L780,250 L820,270 L840,320 L820,370 L780,390 L740,370 L720,320 L730,280 Z"
          fill="#FF7F00"
          opacity="0.9"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{ opacity: 1 }}
        />

        {/* Oceania / Australia */}
        <motion.path
          d="M920,420 L980,410 L1040,430 L1060,480 L1040,530 L980,550 L920,530 L900,480 Z M1000,380 L1040,370 L1060,390 L1050,410 L1010,410 Z"
          fill="#0055CC"
          opacity="0.7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ opacity: 1, fill: "#FF7F00" }}
        />

        {/* Greenland */}
        <motion.path
          d="M340,50 L400,40 L440,60 L450,100 L430,130 L380,140 L340,120 L330,80 Z"
          fill="#0055CC"
          opacity="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.9 }}
        />

        {/* Japan */}
        <motion.path
          d="M980,180 L1000,170 L1020,190 L1010,230 L990,240 L970,220 Z"
          fill="#0055CC"
          opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ opacity: 1, fill: "#FF7F00" }}
        />

        {/* UK */}
        <motion.path
          d="M460,130 L480,120 L490,140 L480,160 L460,160 Z"
          fill="#0055CC"
          opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1.1 }}
        />
      </svg>

      {/* Connection Lines from India HQ */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600">
        {regions.map((region, index) => {
          const targetX = parseFloat(region.x) * 12
          const targetY = parseFloat(region.y) * 6
          return (
            <motion.line
              key={region.id}
              x1="780"
              y1="320"
              x2={targetX}
              y2={targetY}
              stroke="#FF7F00"
              strokeWidth="2"
              strokeDasharray="8,4"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 + index * 0.2 }}
            />
          )
        })}
      </svg>

      {/* Region Markers */}
      {regions.map((region, index) => (
        <motion.div
          key={region.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
          style={{ left: region.x, top: region.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
          onMouseEnter={() => setActiveRegion(region.id)}
          onMouseLeave={() => setActiveRegion(null)}
        >
          {/* Pulsing ring */}
          <motion.div
            className="absolute w-8 h-8 bg-[#0055CC] rounded-full -left-4 -top-4"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
          />
          
          {/* Main dot */}
          <div className="w-5 h-5 bg-[#0055CC] rounded-full shadow-lg group-hover:bg-[#FF7F00] group-hover:scale-125 transition-all duration-300 border-2 border-white" />
          
          {/* Tooltip */}
          <motion.div 
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-white rounded-xl shadow-2xl whitespace-nowrap border border-gray-100 transition-all duration-300 ${
              activeRegion === region.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div className="font-bold text-gray-900">{region.name}</div>
            <div className="text-sm text-[#FF7F00] font-semibold">{region.countries} Countries</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100" />
          </motion.div>
        </motion.div>
      ))}

      {/* India HQ Marker */}
      <motion.div
        className="absolute z-20"
        style={{ left: '65%', top: '53%' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Pulsing glow */}
          <motion.div
            className="absolute w-16 h-16 bg-[#FF7F00] rounded-full -left-6 -top-6 blur-xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Main marker */}
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF7F00] to-[#e67300] rounded-full shadow-xl flex items-center justify-center border-4 border-white">
            <span className="text-white text-lg">🏭</span>
          </div>
          
          {/* Label */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-2 bg-gradient-to-r from-[#0055CC] to-[#003d99] text-white rounded-full text-sm font-bold whitespace-nowrap shadow-xl">
            🇮🇳 MD PET HQ - India
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Card */}
      <motion.div 
        className="absolute bottom-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        <div className="text-3xl font-bold text-[#0055CC]">45+</div>
        <div className="text-sm text-gray-600">Countries Served</div>
        <div className="flex gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#FF7F00]" />
          ))}
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div 
        className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-gray-100"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2.7 }}
      >
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 bg-[#0055CC] rounded" />
          <span className="text-gray-600">Export Regions</span>
        </div>
        <div className="flex items-center gap-2 text-sm mt-2">
          <div className="w-4 h-4 bg-[#FF7F00] rounded" />
          <span className="text-gray-600">Headquarters</span>
        </div>
      </motion.div>
    </div>
  )
}
