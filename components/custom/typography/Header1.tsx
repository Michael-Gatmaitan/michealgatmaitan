import { HeaderProps } from "@/index"
import { cn } from "@/lib/utils"

const Header1 = ({ children, className, ...props }: HeaderProps) => {
  return (
    <div {...props} className={cn("font-bold font-sans text-8xl lg:text-9xl", className)}>{children}</div>
  )
}

export default Header1