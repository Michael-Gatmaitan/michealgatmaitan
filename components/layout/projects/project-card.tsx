import Header4 from '@/components/custom/typography/Header4'
import { Project } from '@/index'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-primary p-[14px] space-y-[14px]">
      <div className="w-full bg-secondary flex justify-center">
        <Image src={project.thumbnail!} alt={project.title} width={500} height={500} />
      </div>
      <Link href={`projects/${project.id}`} className="hover:underline">
        <Header4>{project.title} {`>`}</Header4>
      </Link>
    </div>
  )
}

export default ProjectCard