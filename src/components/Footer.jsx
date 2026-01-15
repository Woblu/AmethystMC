function Footer() {
  return (
    <footer className="w-full py-8 px-4" style={{ backgroundColor: '#0a0618' }}>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Woblu Image */}
        <div 
          className="w-16 h-16 flex items-center justify-center rounded-lg"
          style={{
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 20px rgba(147, 51, 234, 0.2)',
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.7))'
          }}
        >
          <img 
            src="/Woblu.png" 
            alt="Woblu" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Creator Text */}
        <p className="text-gray-300 text-sm font-medium">
          Creator of Amethyst Launcher
        </p>
        
        {/* Copyright Text */}
        <p className="text-gray-500 text-xs">
          Woblu 2026- © Not associated or approved by Mojang
        </p>
      </div>
    </footer>
  )
}

export default Footer
