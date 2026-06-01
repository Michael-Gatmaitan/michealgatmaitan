// import Gallery from '@/components/layout/projects/project/gallery';
import ShowProject, { ShowProjectSkeleton } from '@/components/layout/projects/project/show-project';
import { Suspense } from 'react';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <div>
      <Suspense fallback={<ShowProjectSkeleton />}>
        <ShowProject id={slug} />
      </Suspense>
      {/* <Gallery gallery={project.gallery} /> */}
    </div>
  )
}

export default page