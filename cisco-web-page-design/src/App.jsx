import React from "react";
import Headline from "./Components/HeadLine/HeadLine";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import Section from "./Components/Section/Section";
import SectionA from "./Components/SectionA/SectionA";
import Introducing from "./Components/IntroducingCisco/Introducing";
import InsideCisco from "./Components/InsideCisco/InsideCisco";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Headline />
      {/* <Navbar /> */}
      <Hero />
      <Content />
      <Section />
      <SectionA />
      <Introducing />
      <InsideCisco />
      <Footer />
    </div>
  );
};

export default App;
