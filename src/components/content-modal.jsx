
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

const content = {
  about: {
    title: "About Me",
    text: `Hello! I'm Saurabh K, a passionate full-stack developer with a love for creating innovative solutions.

I specialize in Python development, web technologies, and creative coding projects. My journey in tech has been driven by curiosity and a desire to build meaningful applications that solve real-world problems.

When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or experimenting with creative coding techniques.

Skills: Python, JavaScript, React, Node.js, Django, FastAPI, PostgreSQL, MongoDB, Docker, AWS, and more.`,
  },
  projects: {
    title: "Projects",
    text: `Here are some of my notable projects:

🚀 E-Commerce Platform
   Full-stack web application built with React, Node.js, and PostgreSQL
   Features: User authentication, payment integration, admin dashboard

🤖 AI Chat Assistant  
   Python-based chatbot using natural language processing
   Technologies: Python, TensorFlow, Flask, WebSocket

📊 Data Visualization Dashboard
   Interactive dashboard for business analytics
   Stack: React, D3.js, Python, FastAPI, Redis

🎮 Game Development Framework
   Custom game engine built from scratch
   Languages: Python, OpenGL, Custom scripting language

🔧 DevOps Automation Tools
   CI/CD pipeline automation and monitoring tools
   Tools: Docker, Kubernetes, Jenkins, Prometheus`,
  },
  contact: {
    title: "Contact Info",
    text: `Let's connect and build something amazing together!

📧 Email: saurabh.dev@example.com
🐙 GitHub: github.com/saurabhk
💼 LinkedIn: linkedin.com/in/saurabhk
🐦 Twitter: @saurabh_codes
🌐 Website: saurabhk.dev

I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a chat about technology and development.

Feel free to reach out if you'd like to work together or if you have any questions about my projects!`,
  },
}

export function ContentModal({ section, onClose }) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showSkip, setShowSkip] = useState(false)
  const typeIntervalRef = useRef(null)

  const sectionContent = content[section]

  useEffect(() => {
    setDisplayText("")
    setIsTyping(true)
    setShowSkip(true)

    const text = sectionContent.text
    let index = 0

    typeIntervalRef.current = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        setShowSkip(false)
        if (typeIntervalRef.current) {
          clearInterval(typeIntervalRef.current)
          typeIntervalRef.current = null
        }
      }
    }, 30)

    return () => {
      if (typeIntervalRef.current) {
        clearInterval(typeIntervalRef.current)
        typeIntervalRef.current = null
      }
    }
  }, [section, sectionContent.text])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && isTyping) {
        skipTyping()
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [isTyping])

  const skipTyping = () => {
    if (typeIntervalRef.current) {
      clearInterval(typeIntervalRef.current)
      typeIntervalRef.current = null
    }
    setDisplayText(sectionContent.text)
    setIsTyping(false)
    setShowSkip(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-black border-2 border-green-400 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-hidden relative shadow-2xl"
        style={{
          boxShadow: "0 0 50px rgba(34, 197, 94, 0.3)",
        }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-green-400/30">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-green-300 text-sm ml-4">terminal@saurabh:~/{section}</span>
          </div>

          <button onClick={onClose} className="text-green-400 hover:text-red-400 transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            $ cat {sectionContent.title.toLowerCase().replace(" ", "_")}.txt
          </h2>

          <div className="bg-gray-900/50 rounded p-4 min-h-[300px] max-h-[400px] overflow-y-auto">
            <pre className="text-green-300 whitespace-pre-wrap text-sm leading-relaxed">
              {displayText}
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  className="text-green-400"
                >
                  █
                </motion.span>
              )}
            </pre>
          </div>

          {showSkip && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={skipTyping}
              className="text-blue-400 hover:text-blue-300 text-sm underline transition-colors"
            >
              Press ENTER to skip typing animation
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
