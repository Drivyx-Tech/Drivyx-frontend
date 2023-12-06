"use client";

import React from "react";
import Benefits from "@/components/home/Benefits";
import FeatureIntro from "@/components/home/FeatureIntro";
import Hero from "@/components/home/Hero";
import LatestBlogs from "@/components/home/LatestBlogs";
import Revolutionary from "@/components/home/Revolutionary";
import Navbar from "@/components/WithSubnavigation";
import Footer from "@/ui/Footer";
import { useAppSlector } from "@/services/redux/hooks";

export default function IndexPage() {
  const accessToken = useAppSlector((state) => state.tokens.currentToken);

  return (
    <>
      <Navbar accessToken={accessToken} />
      <Hero accessToken={accessToken} />
      <FeatureIntro />
      <Benefits />
      <Revolutionary />
      {/* <LatestProjects projects={projects.projects} /> */}
      <LatestBlogs />
      {/* temp hide */}
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
