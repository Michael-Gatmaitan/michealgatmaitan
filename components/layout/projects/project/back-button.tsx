"use client"

import Button from "@/components/custom/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const BackButton = () => {
  const router = useRouter();

  return (
    <Button variant="ghost" onClick={router.back} size="icon-lg">
      <ArrowLeft className="size-5" />
    </Button>
  )
}

export default BackButton