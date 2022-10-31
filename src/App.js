import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  React from 'react';
import  { NavBar } from "./components/NavBar";
import  { Banner } from "./components/Banner";
import  { Skills } from "./components/Skills";
import  { Projects } from "./components/Projects";
import  { Footer } from "./components/Footer";
import { Team } from "./components/Team"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
