import Button from '@/components/custom/button'
import Logo from './logo'
import { ModeToggle } from '@/components/toggle-theme'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="w-full sticky top-0 py-3 px-4 lg:px-12 xl:px-[90px] 2xl:px-[140px] flex justify-between items-center bg-background/30 backdrop-blur-md border-b border-b-primary/20 dark:border-b-white/20 mb-[70px] lg:mb-[100px]">
      <Link href="/">
        <Logo />
      </Link>

      <div className="hidden lg:flex gap-2">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Home</Button>
      </div>

      {/* <Menu /> */}
      <ModeToggle />
    </nav>
  )
}

export default Nav