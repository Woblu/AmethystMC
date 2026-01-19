import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-purple-900/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Logo and Text Cluster */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
          {/* Left Text - AMETHYST */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Top rounded line */}
            <div className="w-full h-2 bg-white rounded-full mb-3"></div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white drop-shadow-lg">
              AMETHYST
            </h1>
            {/* Bottom rounded line */}
            <div className="w-full h-2 bg-white rounded-full mt-3"></div>
          </motion.div>

          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              filter: "brightness(1.2)"
            }}
            className="relative"
          >
            {/* Glow effect behind logo */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(147, 51, 234, 0.5)',
                  '0 0 40px rgba(147, 51, 234, 0.8)',
                  '0 0 20px rgba(147, 51, 234, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full blur-xl"
            />
            <motion.img
              src="/amethyst-logo.png"
              alt="Amethyst Logo"
              className="relative w-[150px] h-[150px] object-contain drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.6))'
              }}
            />
          </motion.div>

          {/* Right Text - LAUNCHER */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Top rounded line */}
            <div className="w-full h-2 bg-white rounded-full mb-3"></div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white drop-shadow-lg">
              LAUNCHER
            </h1>
            {/* Bottom rounded line */}
            <div className="w-full h-2 bg-white rounded-full mt-3"></div>
          </motion.div>
        </div>
        
        {/* Tagline - positioned below the logo/text cluster */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm md:text-base text-gray-300 text-center drop-shadow-md -mt-4"
        >
          A custom Minecraft Launcher for modern Minecraft Versions
        </motion.p>

        {/* Download Button */}
        <motion.a
          href="https://github.com/Woblu/Amethyst-Launcher/releases/download/v1.4.0/Amethyst.Launcher.Setup.1.4.0.exe"
          download="Amethyst.Launcher.Setup.1.4.0.exe"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 40px rgba(147, 51, 234, 1)'
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold text-lg shadow-[0_0_20px_rgba(147,51,234,0.6)] transition-all duration-300 cursor-pointer inline-block no-underline"
        >
          Download
        </motion.a>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => {
            document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <motion.svg
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
