import { HeaderProps } from "@/index"
import { cn } from "@/lib/utils"

const Header4 = ({ children, className, ...props }: HeaderProps) => {
  return (
    <div {...props} className={cn("font-bold font-sans text-2xl lg:text-[28px]", className)}>{children}</div>
  )
}

export default Header4