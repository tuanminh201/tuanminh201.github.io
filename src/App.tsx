import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ParticlesBackground from "./components/ParticlesBackground";
import ExperienceTimeline from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Offers from "./components/Offers";

function App() {
    return (
        <div>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 0
                }}
            >
                <ParticlesBackground />
            </div>

            <NavBar />


            <section
                id="home"
                style={{
                    height: "100vh",
                    background: "transparent",
                    position: "relative",
                    zIndex: 1,
                    scrollMarginTop: "80px"
                }}
            >
                <Home />
            </section>

            <section
                id="experiences"
                style={{
                    paddingTop: "100px",
                    height: "100vh",
                    background: "transparent",
                    position: "relative",
                    zIndex: 1
                }}
            >
                <ExperienceTimeline />
            </section>


            <section
                id="projects"
                style={{
                    height: "100vh",
                    background: "transparent",
                    position: "relative",
                    zIndex: 1,
                    scrollMarginTop: "100px"
                }}
            >
                <Projects />
            </section>

            <section
                id="skills"
                style={{
                    height: "100vh",
                    background: "transparent",
                    position: "relative",
                    zIndex: 1,
                    scrollMarginTop: "80px"
                }}
            >
                <Skills />
            </section>
            <section
                id="offers"
                style={{
                    minHeight: "100vh",
                    background: "transparent",
                    position: "relative",
                    zIndex: 1,
                    scrollMarginTop: "80px"
                }}
            >
                <Offers />
            </section>

        </div>
    );
}

export default App;
