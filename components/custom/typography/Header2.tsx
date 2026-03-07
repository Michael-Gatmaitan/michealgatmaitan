import { HeaderProps } from "@/index"
import { cn } from "@/lib/utils"

const Header2 = ({ children, className, ...props }: HeaderProps) => {
  return (
    <div {...props} className={cn("font-bold font-sans text-5xl lg:text-[64px]", className)}>{children}</div>
  )
}

export default Header2