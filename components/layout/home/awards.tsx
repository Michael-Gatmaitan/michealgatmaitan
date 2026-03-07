import Header3 from '@/components/custom/typography/Header3'
import { type AwardT } from '@/index'
import Award from './award'

const awards: AwardT[] = [
  {
    id: 1,
    title: "Java Programming",
    shortDescription: "3 levels of problem solving",
    description: "Passed and able to solve 3 levels of problem set using Java.",
    year: "2023",
    imageUrl: ""
  },
  {
    id: 2,
    title: "Web Development",
    shortDescription: "Use API keys",
    description: "Cloned a website from scratch with API keys to fetch data for news page and for search feature using React js.",
    year: "2024",
    imageUrl: ""
  },
  {
    id: 3,
    title: "WebFix Challenge",
    shortDescription: "Website debugging",
    description: "Finished all 3 levels of debugging a website in a limited time.",
    year: "2025",
    imageUrl: ""
  }
]

const Awards = () => {
  return (
    <div className="mt-[150px]">
      <Header3>Awards</Header3>

      <div className="mt-[14px] grid gap-3">
        {awards.map(award => (
          <Award award={award} key={award.id} />
        ))}
      </div>
    </div>
  )
}

export default Awards