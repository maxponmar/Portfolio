import './App.scss'

import React from 'react';

import Header from '../Shared/Header/Header'
import ThemeToggler from '../Shared/ThemeToggler/ThemeToggler';
import Footer from '../Shared/Footer/Footer';
import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';

import { profile } from "../Data/userData.js";

export const ThemeContext = React.createContext('light')

function App() {
  return (
    <div className="App">
      <Header title={profile.name} />
      <ThemeToggler />
        <main className="main">
          <Home name={profile.name} description={profile.description} image={profile.image} />
          <About profile={profile} />
          <Skills />
          <Projects />
          <Contact profile={profile} />
        </main>
        <Footer name={profile.name} />
    </div>
  );
}

export default App;
