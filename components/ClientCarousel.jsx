'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const clients = [
  'Coca-Cola', 'PepsiCo', 'Nestlé', 'Bisleri', 'Parle Agro',
  'Dabur', 'Himalaya', 'Tata', 'Reliance', 'Amul',
  'Pepsi', 'Sprite', 'Fanta', 'Aquafina', 'Kinley'
]

export default function ClientCarousel() {
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-16"
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }
        }}
      >
        {/* Double the clients for seamless loop */}
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 py-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <span className="text-xl font-bold text-gray-600 whitespace-nowrap">
              {client}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
