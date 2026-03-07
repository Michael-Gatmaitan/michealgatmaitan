import Header2 from '@/components/custom/typography/Header2'
import DisplayProjects from '@/components/layout/projects/display-projects'

const page = () => {
  return (
    <div className="grid gap-3">
      <Header2 className="text-">Projects</Header2>
      <div className="font-mono opacity-60 lg:text-xl">Projects I&apos;ve made along the way</div>

      <DisplayProjects limit={0} />
    </div>
  )
}

export default page