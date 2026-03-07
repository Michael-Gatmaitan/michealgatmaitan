import Header3 from '@/components/custom/typography/Header3'
import ProjectCard from '../projects/project-card'
import { Project } from '@/index'
import Link from 'next/link'

const project: Project = {
  id: 1,
  slug: "anatolearn",
  title: "AnatoLearn",
  description: "An app that uses 3D models and Augmented Reality for learning human body system. It uses MediaPipe to detect body landmarks and make the 3D model move.",
  tech: ['NextJS', 'TailwindCSS'],
  github: "https://github.com/Michael-Gatmaitan",
  link: "https://anatolearn.netlify.app"
}

const Projects = () => {
  return (
    <div className="mt-[150px] grid gap-3">
      <Header3>Projects</Header3>

      <div className="grid gap-2 lg:grid-cols-3">
        <ProjectCard project={project} />
        <ProjectCard project={project} />
        <ProjectCard project={project} />
      </div>

      <Link className="font-mono underline" href="/projects">4 more...</Link>
    </div>
  )
}

export default Projects