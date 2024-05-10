import React from "react";
import Headline from "./Components/HeadLine/HeadLine";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import Section from "./Components/Section/Section";

const App = () => {
  return (
    <div>
      <Headline />
      <Navbar />
      <Hero />
      <Content />
      <Section />
    </div>
  );
};

export default App;
