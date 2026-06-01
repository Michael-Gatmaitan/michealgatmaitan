import { Award } from '@/index';
import AwardCard from '../home/award-card';

const DisplayAwards = ({ awards }: { awards: Award[] }) => {
  return (
    <div className="mt-[14px] grid gap-3">
      {awards.map(award => (
        <AwardCard award={award} key={award.id} />
      ))}
    </div>
  )
}

export default DisplayAwards;