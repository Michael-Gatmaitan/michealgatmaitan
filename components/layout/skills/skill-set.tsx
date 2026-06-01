import Header4 from "@/components/custom/typography/Header4"
import SkillCard from "./skill-card"

const SkillSet = ({ techs, title }: { title: string, techs: string[] }) => {
  return (
    <div className="space-y-2">
      <Header4 className="tracking-[7px] font-normal">{title}</Header4>
      <div className="flex gap-2 flex-wrap">
        {techs.map((tech, id) => (
          <SkillCard tech={tech} key={id} />
        ))}
      </div>
    </div>
  )
}

export default SkillSet;