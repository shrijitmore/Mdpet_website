'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const regions = [
  { name: 'North America', x: '20%', y: '30%', countries: 5, delay: 0 },
  { name: 'South America', x: '28%', y: '65%', countries: 8, delay: 0.1 },
  { name: 'Europe', x: '48%', y: '25%', countries: 12, delay: 0.2 },
  { name: 'Africa', x: '50%', y: '55%', countries: 15, delay: 0.3 },
  { name: 'Middle East', x: '58%', y: '40%', countries: 10, delay: 0.4 },
  { name: 'Asia', x: '72%', y: '35%', countries: 12, delay: 0.5 },
  { name: 'Oceania', x: '82%', y: '70%', countries: 3, delay: 0.6 },
]

export default function WorldMap() {
  const [activeRegion, setActiveRegion] = useState(null)

  return (
    <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-[#0055CC]/5 to-[#0055CC]/10 rounded-3xl overflow-hidden">
      {/* World Map SVG Background */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full opacity-20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified world map paths */}
        <path
          d="M150,150 Q200,100 250,120 L300,100 Q350,80 400,100 L450,120 Q500,140 480,180 L460,220 Q440,260 400,280 L350,300 Q300,320 250,300 L200,280 Q150,260 140,220 L130,180 Q120,140 150,150Z"
          fill="#0055CC"
          className="animate-pulse"
        />
        <path
          d="M200,320 Q230,300 260,320 L290,340 Q320,360 310,400 L290,440 Q260,470 220,450 L190,420 Q160,390 180,350 L200,320Z"
          fill="#0055CC"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        <path
          d="M450,100 Q500,80 550,100 L600,120 Q650,150 640,200 L620,250 Q590,300 540,280 L490,250 Q440,220 450,170 L460,130 Q470,110 450,100Z"
          fill="#0055CC"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M480,250 Q520,230 560,260 L600,300 Q640,350 620,400 L580,450 Q530,480 480,450 L440,400 Q400,350 430,300 L480,250Z"
          fill="#0055CC"
          className="animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        <path
          d="M600,120 Q680,80 760,120 L840,160 Q900,200 880,280 L840,360 Q780,420 700,380 L620,320 Q560,260 580,180 L600,120Z"
          fill="#0055CC"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <path
          d="M780,380 Q820,360 860,390 L890,430 Q910,470 880,500 L840,520 Q790,530 760,500 L740,460 Q720,420 750,390 L780,380Z"
          fill="#0055CC"
          className="animate-pulse"
          style={{ animationDelay: '2.5s' }}
        />
      </svg>

      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50">
        {regions.map((region, index) => (
          <motion.line
            key={index}
            x1="50%"
            y1="50%"
            x2={region.x}
            y2={region.y}
            stroke="#FF7F00"
            strokeWidth="0.2"
            strokeDasharray="2,2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: region.delay }}
          />
        ))}
      </svg>

      {/* Region markers */}
      {regions.map((region, index) => (
        <motion.div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{ left: region.x, top: region.y }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: region.delay + 0.5 }}
          onMouseEnter={() => setActiveRegion(region.name)}
          onMouseLeave={() => setActiveRegion(null)}
        >
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 bg-[#FF7F00] rounded-full"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            style={{ width: 20, height: 20, marginLeft: -10, marginTop: -10 }}
          />
          
          {/* Main dot */}
          <div className="w-4 h-4 bg-[#FF7F00] rounded-full shadow-lg group-hover:scale-150 transition-transform relative z-10">
            <div className="absolute inset-1 bg-white rounded-full" />
          </div>
          
          {/* Tooltip */}
          <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 ${activeRegion === region.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            <div className="font-bold text-gray-900 text-sm">{region.name}</div>
            <div className="text-xs text-[#FF7F00]">{region.countries} Countries</div>
          </div>
        </motion.div>
      ))}

      {/* Center marker - India/HQ */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div
          className="w-8 h-8 bg-[#0055CC] rounded-full shadow-xl flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-4 h-4 bg-white rounded-full" />
        </motion.div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-2 bg-[#0055CC] text-white rounded-lg text-sm font-bold whitespace-nowrap">
          🇮🇳 MD PET HQ
        </div>
      </motion.div>

      {/* Stats overlay */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
        <div className="text-2xl font-bold text-[#0055CC]">45+</div>
        <div className="text-sm text-gray-600">Countries Served</div>
      </div>
    </div>
  )
}
