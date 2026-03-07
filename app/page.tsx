import Awards from "@/components/layout/home/awards";
import Hero from "@/components/layout/home/hero";
import Projects from "@/components/layout/home/projects";
import Skills from "@/components/layout/home/skills";

export default function Home() {
  return (
    <div className="grid gap-2 lg:grid-cols-2">
      <Hero />
      <Projects limit={1} />

      <Skills />
      <Awards />
    </div>
  );
}
