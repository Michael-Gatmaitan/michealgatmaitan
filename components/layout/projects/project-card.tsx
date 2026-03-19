import Header4 from '@/components/custom/typography/Header4'
import { ProjectT } from '@/index'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({ project }: { project: ProjectT }) => {
  return (
    <div className="bg-primary p-[14px] space-y-[14px]">
      <div className="w-full h-[200px] bg-secondary"></div>
      <Link href={`projects/${project.slug}`} className="hover:underline">
        <Header4>{project.title}</Header4>
      </Link>
    </div>
  )
}

export default ProjectCard