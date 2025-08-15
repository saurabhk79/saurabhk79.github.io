import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalHeader } from "./components/terminal-header";
import { MenuButtons } from "./components/menu-buttons";
import { ContentModal } from "./components/content-modal";
import { AnimatedBackground } from "./components/animated-background";
import { FeaturedButtons } from "./components/featured-buttons";

import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 min-h-screen w-screen flex flex-col items-center justify-center p-4"
      >
        <div className="w-full max-w-4xl mx-auto text-center space-y-12">
          <TerminalHeader />
          <MenuButtons
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <h2 className="mt-32 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 drop-shadow-2xl">
            Featured Projects
          </h2>

          <FeaturedButtons />
        </div>
      </motion.div>

      <AnimatePresence>
        {activeSection && (
          <ContentModal
            section={activeSection}
            onClose={() => setActiveSection(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
