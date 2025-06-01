import { Flex, Button, Image, Box, IconButton, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../assets/img/logo.png";

// Các section có trên trang (thêm "offers")
const sections = ["home", "experiences", "projects", "skills", "offers"];

// Map section -> label đẹp
const sectionLabels: Record<string, string> = {
    home: "Home",
    experiences: "Experiences",
    projects: "Projects",
    skills: "Skills",
    offers: "Offers"
};

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("home");
    const [language, setLanguage] = useState<"EN" | "DE">("EN");

    const scrollToSection = (id: string) => {
        if (typeof window !== "undefined") {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "center" });
                setActiveSection(id);
            }
        }
    };

    useEffect(() => {
        if (typeof window === "undefined") return;

        const observer = new IntersectionObserver(
            (entries) => {
                let isAnySectionVisible = false;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        isAnySectionVisible = true;
                    }
                });
                if (!isAnySectionVisible) {
                    setActiveSection("home");
                }
            },
            { threshold: 0.1 }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <Flex
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            bg="transparent"
            p={6}
            align="center"
            justify="space-between"
            zIndex="1000"
            height="80px"
            color="white"
        >
            {/* Logo */}
            <Image src={logo} height="60px" />

            {/* Nav buttons */}
            <Box display="flex" alignItems="center" gap={8}>
                {sections.map((section) => (
                    <Button
                        key={section}
                        variant="ghost"
                        size="lg"
                        fontSize="xl"
                        onClick={() => scrollToSection(section)}
                        color={activeSection === section ? "purple.500" : "white"}
                    >
                        {sectionLabels[section]}
                    </Button>
                ))}
            </Box>

            {/* Social icons */}
            <Box display="flex" alignItems="center" gap={6}>
                <Link
                    href="https://linkedin.com/in/tuan-minh-do-2262b3236"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconButton aria-label="LinkedIn" variant="ghost" color="white">
                        <FaLinkedin />
                    </IconButton>
                </Link>

                <Link
                    href="https://github.com/tuanminh201"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconButton aria-label="GitHub" variant="ghost" color="white">
                        <FaGithub />
                    </IconButton>
                </Link>

                <Link href="mailto:do.tuanminh201@gmail.com">
                    <IconButton aria-label="Email" variant="ghost" color="white">
                        <FaEnvelope />
                    </IconButton>
                </Link>
            </Box>
        </Flex>
    );
}
