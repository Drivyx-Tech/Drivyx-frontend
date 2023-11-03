import Benefits from "@/components/home/Benefits";
import FeatureIntro from "@/components/home/FeatureIntro";
import Hero from "@/components/home/Hero";
import LatestBlogs from "@/components/home/LatestBlogs";
import Projects from "@/components/home/Projects";
import Revolutionary from "@/components/home/Revolutionary";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureIntro />
      <Benefits />
      <Revolutionary />
      <Projects />
      <LatestBlogs />
      <Testimonials />
    </div>
  );
}
