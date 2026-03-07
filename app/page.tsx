import Header3 from "@/components/custom/typography/Header3";
import Header4 from "@/components/custom/typography/Header4";
import Hero from "@/components/layout/home/hero";
import Projects from "@/components/layout/home/projects";
import Skills from "@/components/layout/home/skills";

export default function Home() {
  return (
    <div className="grid gap-2">
      {/* Hero */}
      <Hero />
      <Projects />

      <Skills />
    </div>
  );
}
