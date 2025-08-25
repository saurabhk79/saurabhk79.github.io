
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

const content = {
  about: {
    title: "About Me",
    text: `Hey, I’m Saurabh Kumar — a full-stack developer who enjoys building things that are both useful and efficient. Over the past year, I’ve worked on frontend and backend projects using React, Vue, Node.js, and Fastify, while also getting hands-on with PostgreSQL and MongoDB for data-heavy applications.

I’ve had the chance to work at Pando.ai, a product-based company, where I built scalable Vue.js components and optimized backend APIs to cut down response times. Before that, I developed MERN applications at Tech Corona, strengthening my foundations in full-stack work and deployments with Docker and Jenkins.

My focus is on writing clean, maintainable code and creating applications that run fast and feel smooth. Beyond web apps, I’m curious about AI integrations and system optimization — areas I’ve started experimenting with in my side projects.

Skills: Python, JavaScript, React, Node.js, Django, FastAPI, PostgreSQL, MongoDB, Docker, AWS, and more.`,
  },
  projects: {
    title: "Projects",
    text: `Here are some of my notable projects:

📊 Analytics Dashboard
Web-based dashboard for visualizing and monitoring data in real-time
Stack: React, Chart.js, Node.js, MongoDB

💬 Group Chat Application(ChatO)
Real-time chat app for group conversations
Stack: Node.js, Express, Socket.io, HTML, CSS

🔐 LockWala — Password Manager
Secure and encrypted password storage with master key protection
Stack: Next.js, TailwindCSS, supabase

⌨️ Typing Speed Test
Interactive typing game to test speed and accuracy
Stack: Nextjs, TailwindCSS, postgres

🔗 LinkWink — URL Shortener
Shorten and manage links with click analytics
Stack: Nextjs, MongoDB`,
  },
  contact: {
    title: "Contact Info",
    text: `Let's connect and build something amazing together!

📧 Email: imsaurabhk2002@gmail.com
🐙 GitHub: github.com/saurabhk79
💼 LinkedIn: linkedin.com/in/saurabhk79
🌐 Website: saurabhk79.github.io

I'm always open to discussing new opportunities, collaborating on interesting projects.

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

    const text = sectionContent?.text
    let index = 0

    typeIntervalRef.current = setInterval(() => {
      if (index < text?.length) {
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
  }, [section, sectionContent?.text])

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
    setDisplayText(sectionContent?.text)
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
            $ cat {sectionContent?.title.toLowerCase().replace(" ", "_")}.txt
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
