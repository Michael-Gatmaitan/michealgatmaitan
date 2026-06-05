import Button from '@/components/custom/button'
import Header1 from '@/components/custom/typography/Header1'
import Header3 from '@/components/custom/typography/Header3'
import { Paperclip } from 'lucide-react'
import Link from 'next/link'
import StackIcon from 'tech-stack-icons'

const Hero = () => {
  return (
    <div className="grid lg:col-span-full">
      <div className="grid gap-2 lg:gap-4">
        <div>
          <Header1>Hi,<br />I am Michael<br />Gatmaitan</Header1>
        </div>

        <div className="flex gap-2">
          <Button asChild>
            <Link
              href="/cv/Michael Gatmaitan - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Paperclip />
              My Resume
            </Link>
          </Button>
          <Button asChild size="icon">
            <Link
              href="https://github.com/Michael-Gatmaitan"
              target="_blank"
            >
              <StackIcon name="github" className='w-[24px] h-[24px]' />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-[200px] font-mono text-center">
        A aspiring<br />
        fullstack developer
      </div>

      <div className="lg:flex items-center justify-center">
        <Header3 className="text-justify mt-[90px] lg:mt-[120px] lg:w-10/12 lg:text-center">
          I am Michael Gatmaitan from Philippines. I am 23 year old, a graduate student in Bachelor of science in information technology in Marilao, Bulacan.
        </Header3>

      </div>
    </div >
  )
}

export default Hero