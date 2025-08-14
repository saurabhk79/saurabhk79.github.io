"use client"

import { motion } from "framer-motion"


const menuItems = [
  { id: "about", label: "./about", command: "cat about.txt" },
  { id: "projects", label: "./projects", command: "ls projects/" },
  { id: "contact", label: "./contact", command: "cat contact.info" },
]

export function MenuButtons({ activeSection, setActiveSection }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="flex flex-col md:flex-row gap-6 justify-center items-center"
    >
      {menuItems.map((item, index) => (
        <motion.button
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection(item.id)}
          className="group relative px-8 py-4 bg-black border-2 border-green-400 rounded-lg hover:border-blue-400 transition-all duration-300 min-w-[200px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative space-y-1">
            <div className="text-green-300 text-sm opacity-70">$ {item.command}</div>
            <div className="text-white text-lg font-semibold group-hover:text-blue-300 transition-colors">
              {item.label}
            </div>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      ))}
    </motion.div>
  )
}
