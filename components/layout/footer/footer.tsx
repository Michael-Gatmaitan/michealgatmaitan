import Button from '@/components/custom/button'
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {

  const contacts = [
    {
      name: "Github",
      icon: Github,
      href: "https://github.com/Michael-Gatmaitan/"
    }, {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/michael-gatmaitan-4642b4198/"
    }, {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/mchlgtmtn/"
    }, {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/mchlgtmtn/"
    }
  ]

  return (
    <footer className="px-4 lg:px-12 xl:px-[90px] 2xl:px-[140px] py-12 grid lg:grid-cols-2 gap-4 items-center justify-center lg:justify-between">
      <div className="flex gap-2 justify-center lg:justify-start">
        {contacts.map((contact) => (
          <Button key={contact.name} size="icon-lg" variant="ghost" asChild>
            <Link href={contact.href} target='_blank'>
              <contact.icon />
            </Link>
          </Button>
        ))}
      </div>

      <div className="font-mono lg:text-right">Built using <Link className='underline' href="https://nextjs.org/">Next.js</Link> and <Link className='underline' href="https://tailwindcss.com/">Tailwind CSS</Link> and deployed in <Link className="underline" href="https://vercel.com/">Vercel</Link></div>
    </footer>
  )
}

export default Footer