'use client'

// import { projects } from '@/lib/project-list'
import Link from 'next/link'
import ProjectCard from './project-card'
import { motion, type Variants } from 'motion/react'
import { Project } from '@/index'

const DisplayProjects = ({ limit, projects }: { limit: number, projects: Project[] }) => {
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

  if (!projects) return (
    <div className="flex items-center justify-center">
      <p>No projects found</p>
    </div>
  )

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
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
