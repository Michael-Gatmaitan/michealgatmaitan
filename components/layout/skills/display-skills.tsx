"use client";

import { Skill } from '@/index'
import SkillSet from './skill-set'
import { motion, type Variants } from 'motion/react'

const DisplaySkills = ({ skills }: { skills: Skill[] }) => {
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
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      className="grid gap-4"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skills.map((skill) => (
        <motion.div key={skill.id} variants={itemVariants}>
          <SkillSet title={skill.title} techs={skill.tags} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default DisplaySkills