import { Project } from '@/index'
import DisplayProjects from './display-projects'
import { Suspense } from 'react';

const ProjectSection = async () => {
  const res = await fetch("https://headless-portfolio-cms-api.vercel.app/public/v1/projects", {
    next: { revalidate: 3600 },
    headers: {
      "X-API-Key": process.env.FETCHFOLIO_API_KEY!
    }
  });

  const data: Project[] = (await res.json()).data;

  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <DisplayProjects projects={data} limit={10} />
    </Suspense>
  )
}

export default ProjectSection