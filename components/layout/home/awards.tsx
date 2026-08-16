import Header3 from '@/components/custom/typography/Header3'
import AwardsSection from '../awards/awards-section'

const Awards = () => {
  return (
    <div className="mt-[150px] scroll-mt-20 lg:scroll-mt-24" id="awards">
      <Header3>Awards</Header3>

      <AwardsSection />
      {/* <div className="mt-[14px] grid gap-3">
        {awards.map(award => (
          <Award award={award} key={award.id} />
        ))}
      </div> */}
    </div>
  )
}

export default Awards