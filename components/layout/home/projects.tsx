import Header3 from '@/components/custom/typography/Header3'
import ProjectSection from '../projects/project-section';

const Projects = () => {
  return (
    <div className="mt-[150px] grid gap-3 lg:col-span-full scroll-mt-20 lg:scroll-mt-24" id="projects">
      <Header3>Projects</Header3>

      {/* Projects section */}
      <ProjectSection />

    </div>
  )
}

export default Projects