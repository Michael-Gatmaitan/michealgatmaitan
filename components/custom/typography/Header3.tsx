import { HeaderProps } from "@/index"
import { cn } from "@/lib/utils"

const Header3 = ({ children, className, ...props }: HeaderProps) => {
  return (
    <div {...props} className={cn("font-bold font-sans text-[32px] lg:text-[40px]", className)}>{children}</div>
  )
}

export default Header3