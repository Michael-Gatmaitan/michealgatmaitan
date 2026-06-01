import { Award } from '@/index';
import React, { Suspense } from 'react'
import DisplayAwards from './display-awards';

const AwardsSection = async () => {
  const res = await fetch("https://headless-portfolio-cms-api.vercel.app/public/v1/awards", {
    next: { revalidate: 3600 },
    headers: {
      "X-API-Key": process.env.FETCHFOLIO_API_KEY!
    }
  });

  const data: Award[] = (await res.json()).data;

  return (
    <Suspense fallback={<div>Loading awards...</div>}>
      <DisplayAwards awards={data} />
    </Suspense>
  )
}

export default AwardsSection;