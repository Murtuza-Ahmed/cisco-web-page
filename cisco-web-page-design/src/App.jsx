import React from "react";
import Headline from "./Components/HeadLine/HeadLine";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import Section from "./Components/Section/Section";
import SectionA from "./Components/SectionA/SectionA";
import Introducing from "./Components/IntroducingCisco/Introducing";

const App = () => {
  return (
    <div>
      <Headline />
      <Navbar />
      <Hero />
      <Content />
      <Section />
      <SectionA />
      <Introducing />
    </div>
  );
};

export default App;
