"use client"
import Button from '@/components/custom/button'
import { Award } from '@/index'
import { Minus, Plus } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

const AwardCard = ({ award }: { award: Award }) => {
  const [expand, setExpand] = useState(false)

  return (
    <div className="grid gap-3 font-mono lg:col-span-1">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-medium text-xl">{award.title}</div>
          <div className="text-xs opacity-60">{award.shortDescription}</div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="font-medium text-xl">{award.year}</div>

          <Button variant="ghost" size="icon-sm" onClick={() => setExpand(prev => !prev)}>
            {!expand ? <Plus /> : <Minus />}
          </Button>
        </div>
      </div>

      {expand && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="space-y-2 pt-1">
            <div className="w-full aspect-[4/3] bg-primary relative">
              <Image src={award.thumbnail!} alt={award.title} fill className='object-cover' />
            </div>
            <div className="opacity-60">{award.longDescription}</div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default AwardCard