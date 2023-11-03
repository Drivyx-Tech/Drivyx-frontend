import Benefits from "@/components/home/Benefits";
import FeatureIntro from "@/components/home/FeatureIntro";
import Hero from "@/components/home/Hero";
import LatestBlogs from "@/components/home/LatestBlogs";
import LatestProjects from "@/components/home/LatestProjects";
import Revolutionary from "@/components/home/Revolutionary";
import Testimonials from "@/components/home/Testimonials";
import { Project } from "@/types/Project";

export default function Home({ projects }: { projects: Project[] }) {
  return (
    <div>
      <Hero />
      <FeatureIntro />
      <Benefits />
      <Revolutionary />
      {projects && <LatestProjects projects={projects} />}
      <LatestBlogs />
      <Testimonials />
    </div>
  );
}
