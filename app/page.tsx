import Awards from "@/components/layout/home/awards";
import DisplayGitHubContributions from "@/components/layout/home/display-github-contributions";
import Hero from "@/components/layout/home/hero";
import Projects from "@/components/layout/home/projects";
import Skills from "@/components/layout/home/skills";
import { fetchContribution } from "@/lib/guthub-contibutions";

export default function page() {

  const contributionPromise = fetchContribution();

  return (
    <div className="grid gap-2 lg:grid-cols-2">
      <Hero />

      <DisplayGitHubContributions githubContributionsPromise={contributionPromise} />

      <Projects />

      <Skills />

      <Awards />
    </div>
  );
}
