import React from "react";
import Benefits from "@/components/home/Benefits";
import FeatureIntro from "@/components/home/FeatureIntro";
import Hero from "@/components/home/Hero";
import LatestBlogs from "@/components/home/LatestBlogs";
import Revolutionary from "@/components/home/Revolutionary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx",
  // description: "Generated by Next + Sanity",
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
