import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ParticlesBackground from "./components/ParticlesBackground";
import ExperienceTimeline from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <div>
            {/* Particles ở dưới cùng */}
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 0
            }}>
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
                    scrollMarginTop: "80px" // thêm dòng này
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
                    scrollMarginTop: "100px" // thêm dòng này
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
                    scrollMarginTop: "80px" // thêm dòng này
                }}
            ><Skills />
            </section>

        </div>
    );
}

export default App;
