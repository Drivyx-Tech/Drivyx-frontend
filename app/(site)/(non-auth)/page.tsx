import React from "react";
import Benefits from "@/components/home/Benefits";
import FeatureIntro from "@/components/home/FeatureIntro";
import Hero from "@/components/home/hero/Hero";
import LatestBlogs from "@/components/home/LatestBlogs";
import Revolutionary from "@/components/home/Revolutionary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx ESG",
  description:
    "Drivyx ESG: A Trailblazing Double-Sided Marketplace, Dedicated to Biodiversity, Sustainability, Circular Economy, and Regenerative Design.",
};

export default function MainPage() {
  return (
    <>
      <Hero />
      <FeatureIntro />
      <Benefits />
      <Revolutionary />
      {/* <LatestProjects projects={projects.projects} /> */}
      <LatestBlogs />
      {/* <Testimonials /> */}
    </>
  );
}
