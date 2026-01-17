import { motion } from 'framer-motion'

const features = [
  {
    title: 'Dual Mod Support',
    description: 'We support Modrinth + CurseForge and more. Access the largest collection of Minecraft mods from multiple platforms in one place.',
    icon: '📦',
    hasDiagonal: true,
    leftImage: '/modrinth.png',
    rightImage: '/curseforge.png'
  },
  {
    title: 'Java & Bedrock Support',
    description: 'Play both Java Edition and Bedrock Edition seamlessly. Switch between versions with ease and enjoy the best of both worlds.',
    icon: '🎮',
    hasDiagonal: true,
    leftImage: '/java.png',
    rightImage: '/bedrock.png'
  },
  {
    title: 'Amethyst Client',
    description: 'Amethyst Client is a client which gives more performance and features! Experience enhanced gameplay with optimized performance.',
    icon: '💎',
    hasDiagonal: false
  }
]

function Features() {
  return (
    <section id="features" className="w-full py-20 px-4" style={{ backgroundColor: '#0a0618' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ color: '#E6D5FF' }}
        >
          Features
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div
                className="h-full backdrop-blur-md rounded-lg p-6 transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: '#15102c',
                  border: '1px solid rgba(153, 102, 204, 0.2)',
                }}
              >
                {feature.hasDiagonal ? (
                  <>
                    {/* Diagonal Split Layout */}
                    <div className="relative h-full min-h-[300px]">
                      {/* Diagonal Line */}
                      <svg
                        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                        style={{ overflow: 'visible' }}
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="100%"
                          y2="100%"
                          stroke="rgba(153, 102, 204, 0.6)"
                          strokeWidth="2"
                        />
                      </svg>

                      {/* Left Side - Top Left */}
                      <div className="absolute top-0 left-0 w-1/2 h-1/2 p-4 flex items-center justify-center">
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={feature.leftImage}
                            alt=""
                            className="max-w-full max-h-full object-contain opacity-80"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>
                      </div>

                      {/* Right Side - Bottom Right */}
                      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-4 flex items-center justify-center">
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={feature.rightImage}
                            alt=""
                            className="max-w-full max-h-full object-contain opacity-80"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>
                      </div>

                      {/* Content Area - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 pt-4">
                        {/* Title */}
                        <h3 
                          className="text-2xl font-bold mb-2"
                          style={{ color: '#f5f3f8' }}
                        >
                          {feature.title}
                        </h3>
                        
                        {/* Description */}
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: '#b09ecf' }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Regular Layout */}
                    {/* Icon */}
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    
                    {/* Title */}
                    <h3 
                      className="text-2xl font-bold mb-3"
                      style={{ color: '#f5f3f8' }}
                    >
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="text-base leading-relaxed"
                      style={{ color: '#b09ecf' }}
                    >
                      {feature.description}
                    </p>
                  </>
                )}

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: '0 0 30px rgba(178, 55, 255, 0.4)',
                    border: '1px solid rgba(178, 55, 255, 0.3)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
