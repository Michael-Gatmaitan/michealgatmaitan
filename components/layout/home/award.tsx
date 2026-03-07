"use client"
import Button from '@/components/custom/button'
import { type AwardT } from '@/index'
import { Minus, Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const Award = ({ award }: { award: AwardT }) => {
  const [expand, setExpand] = useState(false)

  return (
    <div className="grid gap-3 font-mono">
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

      <AnimatePresence initial={false}>
        {expand && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-2 pt-1">
              <div className="w-full h-40 bg-primary">
              </div>
              <div className="opacity-60">{award.description}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Award