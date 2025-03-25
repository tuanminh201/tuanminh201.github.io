import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ParticlesBackground from "./components/ParticlesBackground";
import ExperienceTimeline from "./components/Experiences";
import Projects from "./components/Projects"; // ✅ Thêm dòng này

function App() {
    return (
        <div>
            <ParticlesBackground />
            <NavBar />
            <section id="home" style={{ height: "100vh", background: "#f0f0f0" }}>
                <Home/>
            </section>
            <section id="experiences" style={{ background: "transparent" }}>
                <ExperienceTimeline />
            </section>
            <section id="projects" style={{ height: "100vh" ,background: "transparent" }}>
                <Projects />
            </section>
            <section id="skills" style={{ height: "100vh", background: "#999" }}>
                <h1>Skills</h1>
            </section>
        </div>
    );
}

export default App;
