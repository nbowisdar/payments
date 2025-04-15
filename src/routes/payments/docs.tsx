import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/payments/docs')({
  component: RouteComponent,
})

const linkData = [
  { name: "Connecting Party Integration", url: "https://doc.globalpayapp.net/integration/index.html" },
  { name: "Merchant Manual", url: "https://doc.globalpayapp.net/merchant/index.html" },
  { name: "Manager Manual", url: "https://doc.globalpayapp.net/manager/index.html" },
]

function RouteComponent() {
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <motion.h1 
            className="text-3xl font-bold text-gray-800 mb-2"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            Globalpay Documentation
          </motion.h1>
          <motion.h3 
            className="text-xl "
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Processing solutions for business
          </motion.h3>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {linkData.map(({ name, url }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6  rounded-lg shadow-md hover:shadow-lg bg-gray-900  border-l-4 border-gray-500"
              >
                <h2 className="text-xl font-semibold ">{name}</h2>
                <p className="text-blue-600 text-sm mt-1">{url}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}