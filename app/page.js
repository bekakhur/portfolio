import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <main className="max-w-[1800px] md:px-8 lg:px-16">
      <Hero />
      <About />
      {/* <Stack /> */}
      <ProjectCard />
      <Contact />
    </main>
  );
}
