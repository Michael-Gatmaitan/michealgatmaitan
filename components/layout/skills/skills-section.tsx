import { Skill } from "@/index";
import { Suspense } from "react";
import DisplaySkills from "./display-skills";

const SkillsSection = async () => {
  const res = await fetch("https://headless-portfolio-cms-api.vercel.app/public/v1/skills", {
    next: { revalidate: 3600 },
    headers: {
      "X-API-Key": process.env.FETCHFOLIO_API_KEY!
    }
  });

  const data: Skill[] = (await res.json()).data;

  return (
    <Suspense fallback={<div>Loading skills...</div>}>
      <DisplaySkills skills={data} />
    </Suspense>
  )
}

export default SkillsSection;