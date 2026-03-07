'use client'

import { projects } from '@/lib/project-list'
import Link from 'next/link'
import ProjectCard from './project-card'
import { motion, useInView, type Variants } from 'motion/react'
import { useRef } from 'react'

const DisplayProjects = ({ limit }: { limit: number }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const effectiveLimit =
    limit <= 0 || limit >= projects.length ? projects.length : limit

  const visibleProjects = projects.slice(0, effectiveLimit)
  const remainingCount = projects.length - visibleProjects.length

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
    >
      <div className="grid gap-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <motion.div key={project.slug} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {remainingCount > 0 && (
        <motion.div variants={itemVariants} className="mt-2">
          <Link className="font-mono underline" href="/projects">
            {remainingCount} more...
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default DisplayProjects
