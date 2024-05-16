import React from "react";
import Header from "./Components/Header/Header";
// import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import Section from "./Components/Section/Section";
import SectionA from "./Components/SectionA/SectionA";
import Introducing from "./Components/IntroducingCisco/Introducing";
import InsideCisco from "./Components/InsideCisco/InsideCisco";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Hero />
      <Content />
      <Section />
      <SectionA />
      <Introducing />
      <InsideCisco />
      <Footer />
    </>
  );
};

export default App;
