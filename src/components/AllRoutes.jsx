import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import AgentGrid from "./Pages/AgentGrid.jsx/AgentGrid";
import AgentSingle from "./Pages/AgentSingle/AgentSingle";
import BlogSingle from "./Pages/BlogSingle/BlogSingle";
import PropertySingle from "./Pages/PropertySingle/PropertySingle";
import Property from "./Property/Property";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/property" element={<Property/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/propertySingle" element={<PropertySingle/>} />
        <Route path="/blogSingle" element={<BlogSingle/>} />
        <Route path="/agentGrid" element={<AgentGrid/>} />
        <Route path="/agentSingle" element={<AgentSingle/>} />
      </Routes>
    </div>
  );
}
