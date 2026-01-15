function PanoramaBackground() {
  return (
    <div 
      className="fixed inset-0"
      style={{
        zIndex: -1,
        backgroundImage: 'url(/panorama.png)',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        backgroundPosition: '0 0',
        animation: 'scroll-panorama 60s linear infinite',
      }}
    >
      {/* Dark purple/black gradient overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  )
}

export default PanoramaBackground
