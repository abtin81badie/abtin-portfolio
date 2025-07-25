import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/AboutMe";
import Education from "./components/sections/Education";
import ResearchInterests from "./components/sections/ResearchInterests";
import Resume from "./components/sections/Resume";
import Honors from "./components/sections/Honors";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Footer from "./components/sections/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <ResearchInterests />
      <Honors />
      <Experience />
      <Projects />
      <Skills />
      <Resume />
      <Footer />
    </AppContainer>
  );
}

export default App;
