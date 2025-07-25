// src/App.tsx
import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Education from "./components/sections/Education";
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
      <Education />
      <Honors />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </AppContainer>
  );
}

export default App;
