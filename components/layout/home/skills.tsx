import Header3 from "@/components/custom/typography/Header3"
import Header4 from "@/components/custom/typography/Header4"
import { skills } from "@/lib/skill-list"

const Skills = () => {
  return (
    <div className="mt-[150px] lg:col-span-1">
      <Header3>Skills</Header3>

      <div className="mt-[14px] grid gap-3">
        <SkillSet title="Frontend" techs={skills.frontend} />
        <SkillSet title="Backend" techs={skills.backend} />
      </div>
    </div>
  )
}

const SkillCard = ({ tech }: { tech: string }) => {
  return (
    <div className="p-2 bg-primary flex gap-2 items-center">
      <div className="w-8 h-8 bg-background"></div>
      <div className="font-mono">{tech}</div>
    </div>
  )
}

const SkillSet = ({ techs, title }: { title: string, techs: string[] }) => {
  return (
    <div className="space-y-3">
      <Header4 className="tracking-[7px] font-normal">{title}</Header4>
      <div className="flex gap-2 flex-wrap">
        {techs.map((tech, id) => (
          <SkillCard tech={tech} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Skills