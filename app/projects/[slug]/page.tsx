import Button from '@/components/custom/button';
import Header2 from '@/components/custom/typography/Header2';
import BackButton from '@/components/layout/projects/project/back-button';
import Gallery from '@/components/layout/projects/project/gallery';
import { projects } from '@/lib/project-list';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const project = projects.find(project => project.slug === slug)

  if (!project) return null;

  return (
    <div>
      <div className='grid gap-3'>
        <div className="flex gap-5 items-center">
          <BackButton />
          <Header2 className="text-secondary">{project.title}</Header2>
        </div>
        <div className="font-mono opacity-60 lg:text-xl">{project.description}</div>

        <div className="grid grid-cols-2 md:flex gap-2 mt-2">
          <Button asChild>
            <Link href={project.link}>
              Visit
              <ExternalLink />
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href={project.github}>Github repo</Link>
          </Button>
        </div>
      </div>

      <Gallery gallery={project.gallery} />
    </div>
  )
}

export default page