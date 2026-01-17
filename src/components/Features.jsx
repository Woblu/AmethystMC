import { motion } from 'framer-motion'

const features = [
  {
    title: 'Dual Mod Support',
    description: 'We support Modrinth + CurseForge and more. Access the largest collection of Minecraft mods from multiple platforms in one place.',
    icon: '📦',
    hasDiagonal: true,
    leftImage: '/modrinth.png',
    rightImage: '/curseforge.png',
    leftDescription: 'We support Modrinth + CurseForge and more.',
    rightDescription: 'Access the largest collection of Minecraft mods from multiple platforms in one place.'
  },
  {
    title: 'Java & Bedrock Support',
    description: 'Play both Java Edition and Bedrock Edition seamlessly. Switch between versions with ease and enjoy the best of both worlds.',
    icon: '🎮',
    hasDiagonal: true,
    leftImage: '/java.png',
    rightImage: '/bedrock.png',
    leftDescription: 'Play both Java Edition and Bedrock Edition seamlessly.',
    rightDescription: 'Switch between versions with ease and enjoy the best of both worlds.'
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
                className={`backdrop-blur-md rounded-lg transition-all duration-300 overflow-hidden ${feature.hasDiagonal ? 'p-0' : 'p-6 h-full'}`}
                style={{
                  backgroundColor: '#15102c',
                  border: '1px solid rgba(153, 102, 204, 0.2)',
                }}
              >
                {feature.hasDiagonal ? (
                  <>
                    {/* Diagonal Split Layout */}
                    <div className="relative min-h-[300px] w-full">
                      {/* Diagonal Line - goes from top-left to bottom-right */}
                      <svg
                        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
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

                      {/* Left Side - Top Triangle */}
                      <div 
                        className="absolute top-0 left-0 z-0"
                        style={{
                          width: '100%',
                          height: '100%',
                          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                        }}
                      >
                        {/* Left Description Text */}
                        <div className="absolute top-3 left-3 z-10 max-w-[45%]">
                          <p 
                            className="text-sm leading-relaxed"
                            style={{ color: '#f5f3f8' }}
                          >
                            {feature.leftDescription}
                          </p>
                        </div>
                        
                        {/* Left Image - fills the triangle */}
                        <img
                          src={feature.leftImage}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{
                            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      </div>

                      {/* Right Side - Bottom Triangle */}
                      <div 
                        className="absolute bottom-0 right-0 z-0"
                        style={{
                          width: '100%',
                          height: '100%',
                          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                        }}
                      >
                        {/* Right Description Text */}
                        <div className="absolute top-3 right-3 z-10 max-w-[45%] text-right">
                          <p 
                            className="text-sm leading-relaxed"
                            style={{ color: '#f5f3f8' }}
                          >
                            {feature.rightDescription}
                          </p>
                        </div>
                        
                        {/* Right Image - fills the triangle */}
                        <img
                          src={feature.rightImage}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{
                            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
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
