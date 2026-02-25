"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Button from "./custom/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (!mounted) setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    if (theme === "light") setTheme('dark');
    else setTheme('light')
  }

  return (
    <Button onClick={toggleTheme} size="icon">
      {theme === "light" && mounted ? <Sun /> : <Moon />}
    </Button>
  )
}
