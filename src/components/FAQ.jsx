import { motion } from 'framer-motion'
import { useState } from 'react'

const faqData = [
  {
    question: 'Is Amethyst Launcher free?',
    answer: 'Yes, Amethyst Launcher is completely free to download and use. We believe in providing a premium Minecraft launcher experience at no cost to our community.'
  },
  {
    question: 'Does it support Microsoft login?',
    answer: 'Absolutely! Amethyst Launcher fully supports Microsoft account authentication, allowing you to seamlessly log in with your existing Minecraft account.'
  },
  {
    question: 'Can I use mods and resource packs?',
    answer: 'Yes, Amethyst Launcher has built-in support for mods and resource packs. You can easily install, manage, and organize your favorite modifications directly from the launcher.'
  },
  {
    question: 'Is it compatible with all Minecraft versions?',
    answer: 'Amethyst Launcher supports all Minecraft versions from the latest release to legacy versions, including snapshots. You can easily switch between different versions for your gameplay needs.'
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full py-20 px-4" style={{ backgroundColor: '#0a0618' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ color: '#E6D5FF' }} // Lavender color
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className="backdrop-blur-md rounded-lg p-6 cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(139, 92, 246, 0.2)', // Translucent dark purple
                  border: '1px solid rgba(255, 255, 255, 0.2)', // Thin white border
                }}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-white flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 mt-4 pt-4 border-t border-white/10">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
