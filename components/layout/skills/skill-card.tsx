import StackIcon from "tech-stack-icons"

const SkillCard = ({ tech }: { tech: string }) => {
  return (
    <div className="p-2 bg-primary flex gap-2 items-center">
      <div className="w-8 h-8">
        <StackIcon name={tech} />
      </div>
      <div className="font-mono">{tech[0].toUpperCase() + tech.slice(1)}</div>
    </div>
  )
}

export default SkillCard;