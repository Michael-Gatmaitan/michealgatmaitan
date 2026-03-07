import Header1 from '@/components/custom/typography/Header1'
import Header3 from '@/components/custom/typography/Header3'
import React from 'react'

const Hero = () => {
  return (
    <div className="grid lg:col-span-full">
      <Header1>Hi,<br />I am Michael</Header1>

      <div className="mt-[200px] font-mono text-center">
        A aspiring<br />
        fullstack developer
      </div>

      <Header3 className="text-justify mt-[90px] lg:mt-[120px]">
        I am Michael Gatmaitan from Bulacan, Philippines. I am 23 year old graduating student in Bachelor of science in information technology.
      </Header3>
    </div>
  )
}

export default Hero