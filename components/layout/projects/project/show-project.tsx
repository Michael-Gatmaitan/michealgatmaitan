import { Project } from '@/index'
import Button from '@/components/custom/button';
import Header2 from '@/components/custom/typography/Header2';
import BackButton from '@/components/layout/projects/project/back-button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ShowProject = async ({ id }: { id: string }) => {
  const response = await fetch(`https://headless-portfolio-cms-api.vercel.app/public/v1/projects/${id}`, {
    next: { revalidate: 3600 },
    headers: {
      "X-API-Key": process.env.FETCHFOLIO_API_KEY!
    }
  });

  const data: Project = (await response.json()).data;

  return (
    <div className='grid gap-3'>
      <div className="flex gap-5 items-center">
        <BackButton />
        <Header2 className="text-secondary">{data.title}</Header2>
      </div>

      <div className="relative w-full flex justify-center">
        <Image src={data.thumbnail!} alt={data.title} width={1000} height={1000} />
      </div>

      <div className="font-mono opacity-60 lg:text-xl">{data.description}</div>

      <div className="grid grid-cols-2 md:flex gap-2 mt-2">
        <Button asChild>
          <Link href={data.url}>
            Visit
            <ExternalLink />
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href={data.github}>Github repo</Link>
        </Button>
      </div>
    </div>
  )
}

export const ShowProjectSkeleton = () => {
  return (
    <div className='grid gap-3 animate-pulse'>
      <div className="flex gap-5 items-center">
        <BackButton />
        <div className="h-12 lg:h-[64px] w-64 bg-secondary/30 rounded-none" />
      </div>

      <div className="relative w-full aspect-square bg-secondary/20 rounded-none flex items-center justify-center">
        <span className="sr-only">Loading image...</span>
      </div>

      <div className="font-mono space-y-2 mt-2">
        <div className="h-4 lg:h-5 w-full bg-secondary/20 rounded-none" />
        <div className="h-4 lg:h-5 w-5/6 bg-secondary/20 rounded-none" />
        <div className="h-4 lg:h-5 w-3/4 bg-secondary/20 rounded-none" />
      </div>

      <div className="grid grid-cols-2 md:flex gap-2 mt-2">
        <div className="h-10 w-full md:w-28 bg-secondary/30 rounded-none" />
        <div className="h-10 w-full md:w-32 bg-secondary/30 rounded-none" />
      </div>
    </div>
  )
}

export default ShowProject;