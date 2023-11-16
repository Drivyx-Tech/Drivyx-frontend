import Benefits from "@/components/home/Benefits";
import FeatureIntro from "@/components/home/FeatureIntro";
import Hero from "@/components/home/Hero";
import LatestBlogs from "@/components/home/LatestBlogs";
import LatestProjects from "@/components/home/LatestProjects";
import Revolutionary from "@/components/home/Revolutionary";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/WithSubnavigation";
import { filterProjects } from "@/sanity/sanity-utils";
import Footer from "@/ui/Footer";
import React from "react";

export default async function Home() {
  const projects = await filterProjects({
    page: 1,
    pageSize: 2,
  });

  return (
    <>
      <Navbar />
      <Hero />
      <FeatureIntro />
      <Benefits />
      <Revolutionary />
      <LatestProjects projects={projects.projects} />
      <LatestBlogs />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
