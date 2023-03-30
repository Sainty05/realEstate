import React from "react";
import BlogGrid from "./BlogGrid";
import IntroBlog from "./IntroBlog";

export default function Blog() {
  return (
    <main id="main">
      <IntroBlog />
      <BlogGrid/>
    </main>
  );
}
