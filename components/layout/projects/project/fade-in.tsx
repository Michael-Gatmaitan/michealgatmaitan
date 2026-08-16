'use client'

import { motion } from 'motion/react'

const FadeIn = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
