import { ScrollArea, ScrollBar } from '@/components/custom/scroll-area'
import Header3 from '@/components/custom/typography/Header3'
import { ProjectT } from '@/index'

const Gallery = ({ gallery }: { gallery: ProjectT['gallery'] }) => {
  return (
    <div className="grid gap-3 mt-[150px] lg:mt-[180px]">

      <Header3>Gallery</Header3>

      <div className="flex">
        <ScrollArea type='always' className="w-1 flex-1 pb-3">
          <div className='flex space-x-2 lg:space-x-4'>
            {Array(10).fill(0).map((image, i) => (
              <div className="w-48 h-40 rounded-md overflow-hidden bg-primary" key={i}>

              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  )
}

export default Gallery