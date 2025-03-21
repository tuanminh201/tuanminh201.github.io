import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ParticlesBackground from "./components/ParticlesBackground";


function App() {
    return (
        <div>
            <ParticlesBackground />
            <NavBar />
            <section id="home" style={{ height: "100vh", background: "#f0f0f0" }}>
                <Home/>
            </section>
            <section id="experiences" style={{ height: "100vh", background: "#ddd" }}>
                <h1>Experiences</h1>
            </section>
            <section id="projects" style={{ height: "100vh", background: "#bbb" }}>
                <h1>Projects</h1>
            </section>
            <section id="skills" style={{ height: "100vh", background: "#999" }}>
                <h1>Skills</h1>
            </section>
        </div>
    );
}

export default App;
