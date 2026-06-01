import Header2 from '@/components/custom/typography/Header2'
import ProjectSection from '@/components/layout/projects/project-section'

const page = () => {
  return (
    <div className="grid gap-3">
      <Header2 className="text-secondary">Projects</Header2>
      <div className="font-mono opacity-60 lg:text-xl">Projects I&apos;ve made along the way</div>

      <ProjectSection />
    </div>
  )
}

export default page