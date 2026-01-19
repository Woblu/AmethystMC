import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Hero() {
  const [downloadUrl, setDownloadUrl] = useState(null)
  const [downloadFilename, setDownloadFilename] = useState('Amethyst.Launcher.exe')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Woblu/Amethyst-Launcher/releases/latest')
        if (!response.ok) {
          throw new Error('Failed to fetch latest release')
        }
        const data = await response.json()
        
        // Find the setup file (look for .exe files, prioritizing setup/installer names)
        const setupAsset = data.assets.find(asset => {
          const name = asset.name.toLowerCase()
          return name.endsWith('.exe') && (
            name.includes('setup') || 
            name.includes('installer') || 
            name.includes('amethyst')
          )
        }) || data.assets.find(asset => asset.name.endsWith('.exe'))
        
        if (setupAsset) {
          setDownloadUrl(setupAsset.browser_download_url)
          setDownloadFilename(setupAsset.name)
        } else {
          // Fallback to the release zip if no exe found
          const zipAsset = data.assets.find(asset => asset.name.endsWith('.zip'))
          if (zipAsset) {
            setDownloadUrl(zipAsset.browser_download_url)
            setDownloadFilename(zipAsset.name)
          }
        }
      } catch (error) {
        console.error('Error fetching latest release:', error)
        // Fallback to a default URL if API fails
        setDownloadUrl('https://github.com/Woblu/Amethyst-Launcher/releases/latest')
      } finally {
        setIsLoading(false)
      }
    }

    fetchLatestRelease()
  }, [])

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

        {/* Download and Source Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-row items-center gap-4 mt-6"
        >
          {/* Download Button */}
          <motion.a
            href={downloadUrl || 'https://github.com/Woblu/Amethyst-Launcher/releases/latest'}
            download={downloadUrl ? downloadFilename : undefined}
            whileHover={{ 
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-base uppercase tracking-wide transition-all duration-200 cursor-pointer no-underline hover:from-purple-500 hover:to-purple-600 w-40 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg 
                className="w-6 h-6 flex-shrink-0 animate-spin" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                />
              </svg>
            ) : (
              <svg 
                className="w-6 h-6 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
            )}
            {isLoading ? 'Loading...' : 'Download'}
          </motion.a>

          {/* Source Button */}
          <motion.a
            href="https://github.com/Woblu/Amethyst-Launcher/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-700 to-purple-800 text-white font-bold text-base uppercase tracking-wide transition-all duration-200 cursor-pointer no-underline hover:from-purple-600 hover:to-purple-700 w-40"
          >
            <svg 
              className="w-6 h-6 flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                fillRule="evenodd" 
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
                clipRule="evenodd" 
              />
            </svg>
            Source
          </motion.a>
        </motion.div>

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
