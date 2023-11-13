import React from "react";
import Home from "./home";

export default function IndexPage() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Home />
    </>
  );
}
