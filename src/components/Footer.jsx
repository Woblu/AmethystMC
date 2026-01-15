function Footer() {
  return (
    <footer className="w-full py-8 px-4" style={{ backgroundColor: '#0a0618' }}>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Woblu Image */}
        <img 
          src="/Woblu.png" 
          alt="Woblu" 
          className="w-16 h-16 object-contain drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))'
          }}
        />
        
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
