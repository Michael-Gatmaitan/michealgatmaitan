import Header3 from '@/components/custom/typography/Header3'
import DisplayProjects from '../projects/display-projects'
const Projects = () => {

  return (
    <div className="mt-[150px] grid gap-3 lg:col-span-full">
      <Header3>Projects</Header3>

      <DisplayProjects limit={1} />
    </div>
  )
}

export default Projects