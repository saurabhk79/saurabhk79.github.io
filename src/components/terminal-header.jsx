import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Dev",
  "Python Developer",
  "Creative Coder",
  "Problem Solver",
];

export function TerminalHeader() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index <= role.length) {
        setDisplayText(role.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);

        setTimeout(() => {
          setIsTyping(true);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-2"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 drop-shadow-2xl">
          Saurabh K
        </h1>
        <div className="text-xl md:text-2xl text-green-300 h-8 flex items-center justify-center">
          <span className="mr-2">{">"}</span>
          <span className="text-blue-300">{displayText}</span>
          <motion.span
            animate={{ opacity: isTyping ? [1, 0] : 1 }}
            transition={{
              duration: 0.5,
              repeat: isTyping ? Number.POSITIVE_INFINITY : 0,
            }}
            className="ml-1 text-green-400"
          >
            _
          </motion.span>
        </div>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 1 }}
        className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
      />
    </div>
  );
}
