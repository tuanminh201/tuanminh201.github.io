import React, { useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    Badge,
    IconButton,
    Button,
    Link,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { keyframes } from '@emotion/react';

import portfolioImage from '../assets/img/portfolio_preview.png';
import simulationImage from '../assets/img/simulation_ui.png';
import recipeProjectImage from '../assets/img/recipeProject.png';
import todoGif from "../assets/img/Todo-Demo.gif";

// 🔮 Tạo animation gradient viền
const borderGradient = keyframes`
    0% {
        border-image-source: linear-gradient(90deg, #805ad5, #d53f8c);
    }
    50% {
        border-image-source: linear-gradient(90deg, #d53f8c, #38b2ac);
    }
    100% {
        border-image-source: linear-gradient(90deg, #805ad5, #d53f8c);
    }
`;

const projects = [
    {
        title: 'AI-based Recipe Suggestion Website',
        time: '2025',
        tools: ['React', 'TypeScript', 'Bootstrap', 'Gemini 2.5'],
        image: recipeProjectImage,
        description: [
            'Developed a smart recipe suggestion website where users can input available ingredients, dietary preferences, and receive personalized meal ideas.',
            'Integrated Google Gemini 2.5 API to process user data (BMI, cuisine preferences) and generate intelligent suggestions using AI.',
            'Handled full-stack logic from form input to response rendering with a user-friendly interface.',
            'Lesson learned: Gained deep understanding of working with modern LLM APIs, handling user data dynamically, and building full input-output flows. Improved my ability to apply AI reasoning in real-world applications with practical UX.'
        ],
        projectLink: 'https://recipe-ai-ashy.vercel.app',
        githubLink: 'https://github.com/tuanminh201/recipe-ai'
    },

    {
        title: 'Weekly To-Do List App',
        time: '2025',
        tools: ['React', 'TypeScript', 'Bootstrap', 'Java', 'Spring Boot', 'H2 Database', 'Maven'],
        image: todoGif,
        description: [
            'Built a fullstack web app to manage tasks in a weekly calendar layout with separate columns per day.',
            'Implemented features like add/delete tasks, drag-and-drop between days, and task completion toggles.',
            'Runs entirely locally using H2 Database, no need for API keys. Includes a beautiful animated particles background.',
            'Lesson learned: Strengthened my fullstack development skills, get familiar with local database handling.'
        ],
        projectLink: 'https://github.com/tuanminh201/weekly-todo',
        githubLink: 'https://github.com/tuanminh201/weekly-todo'
    },
    {
        title: 'Portfolio Website',
        time: '2024',
        tools: ['React', 'TypeScript', 'Chakra UI', 'Framer Motion'],
        image: portfolioImage,
        description: [
            'Designed and developed a personal portfolio website with animated rocket launch, typing effects, and smooth scrolling transitions.',
            'Utilized Chakra UI for responsive layout and clean component-based styling.',
            'Integrated Framer Motion for interactive animations that enhance visual storytelling and user engagement.',
            'Lesson learned: Strengthened my frontend skills in animation, UI/UX design, and responsive layouts. Learned how to build a website that reflects personal branding while keeping performance and clarity in focus.'
        ],
        projectLink: 'https://tuanminh201.github.io/',
        githubLink: 'https://github.com/tuanminh201/tuanminh201.github.io'
    },
    {
        title: 'Active Learning Simulation UI',
        time: '2025',
        tools: ['React', 'TypeScript', 'MATLAB Simulink'],
        image: simulationImage,
        description: [
            'Built the frontend UI for an Active Learning simulator as part of a research-driven academic project.',
            'Worked in a 6-member frontend team, collaborating closely with backend developers to integrate simulation data from MATLAB Simulink.',
            'Followed Agile Scrum methodology with Kanban boards for task tracking and weekly sprints.',
            'Lesson learned: Learned how a real development team functions — task assignment, cross-team communication, and collaborative problem-solving. Improved my project management and code integration skills in a multi-dev environment with tight deadlines.'
        ],
        projectLink: 'https://github.com/Software-Engineering-Active-Learning/active-learning-frontend',
        githubLink: 'https://github.com/Software-Engineering-Active-Learning/active-learning-frontend'
    },

];


const MotionBox = motion(Box);

const ProjectsShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleChange = (next: boolean) => {
        const newIndex = next
            ? (currentIndex + 1) % projects.length
            : (currentIndex - 1 + projects.length) % projects.length;
        setDirection(next ? 1 : -1);
        setCurrentIndex(newIndex);
    };

    const project = projects[currentIndex];

    return (
        <Box bg="transparent" color="white" minH="100vh" px={10} py={20}>
            <Heading
                mb={-10}
                textAlign="center"
                fontSize={['4xl', '5xl', '6xl']}
            >
                Projects
            </Heading>

            <Flex
                align="center"
                justify="center"
                position="relative"
                width="100%"
                maxW="100vw"
                mx="auto"
                px={[4, 16]}
            >
                {/* Nút trái */}
                <IconButton
                    aria-label="Previous"
                    onClick={() => handleChange(false)}
                    borderRadius="full"
                    position="absolute"
                    left={['-40px', '-10px']}
                    top="50%"
                    transform="translateY(-50%)"
                    size="lg"
                    bg="purple.600"
                    color="white"
                    fontSize="2xl"
                    fontWeight="bold"
                    _hover={{
                        bg: 'purple.700',
                        boxShadow: '0 0 10px #a855f7'
                    }}
                    w="50px"
                    h="50px"
                    zIndex={10}
                >
                    {"<"}
                </IconButton>

                {/* Project content */}
                <AnimatePresence mode="wait" initial={false}>
                    <MotionBox
                        key={currentIndex}
                        initial={{ x: direction * 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -direction * 300, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        w="full"
                        transform="scale(0.9)"
                    >
                        <Flex
                            direction={['column', null, 'row']}
                            bg="transparent"
                            overflow="hidden"
                            p={[4, 6]}
                            align="center"
                            w="full"
                            minH={['auto', null, '80vh']}
                            color="white"
                        >
                            {/* Ảnh với viền gradient động */}
                            <Box
                                flex="1"
                                mb={[6, null, 0]}
                                mr={[0, null, 6]}
                                ml="150px"
                                border="6px solid"
                                borderImageSlice={1}
                                borderImageSource="linear-gradient(90deg, #805ad5, #d53f8c)"
                                animation={`${borderGradient} 6s ease infinite`}
                                borderRadius="lg"
                                transform="scale(1.3)"
                                transition="transform 0.3s ease"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    borderRadius="md"
                                    objectFit="contain"
                                    w="100%"
                                    maxH="80vh"
                                />
                            </Box>

                            {/* Nội dung chữ */}
                            <Box flex="1" ml="150px">
                                <Heading fontSize="3xl" mb={4}>
                                    {project.title}
                                </Heading>
                                <Text fontSize="lg" mb={6}>
                                    {project.time}
                                </Text>

                                {project.description.map((desc, i) => (
                                    <Text key={i} fontSize="xl" mb={4}>
                                        {desc}
                                    </Text>
                                ))}

                                <Flex wrap="wrap" mt={4}>
                                    {project.tools.map((tool, i) => (
                                        <Badge
                                            key={i}
                                            colorScheme="whiteAlpha"
                                            mr={2}
                                            mb={2}
                                            px={3}
                                            py={2}
                                            fontSize="md"
                                        >
                                            {tool}
                                        </Badge>
                                    ))}
                                </Flex>

                                {/* Nút View Project và GitHub */}
                                <Flex mt={6} gap={4}>
                                    <MotionBox
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href={project.projectLink || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button
                                                bg="purple.600"
                                                color="white"
                                                _hover={{ bg: "purple.700" }}
                                                size="lg"
                                            >
                                                View Project
                                            </Button>
                                        </Link>
                                    </MotionBox>
                                    <MotionBox
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href={project.githubLink || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button
                                                bg="gray.600"
                                                color="white"
                                                _hover={{ bg: "gray.700" }}
                                                size="lg"
                                            >
                                                GitHub
                                            </Button>
                                        </Link>
                                    </MotionBox>
                                </Flex>
                            </Box>
                        </Flex>
                    </MotionBox>
                </AnimatePresence>

                {/* Nút phải */}
                <IconButton
                    aria-label="Next"
                    onClick={() => handleChange(true)}
                    borderRadius="full"
                    position="absolute"
                    right={['-40px', '-10px']}
                    top="50%"
                    transform="translateY(-50%)"
                    size="lg"
                    bg="purple.600"
                    color="white"
                    fontSize="2xl"
                    fontWeight="bold"
                    _hover={{
                        bg: 'purple.700',
                        boxShadow: '0 0 10px #a855f7'
                    }}
                    w="50px"
                    h="50px"
                    zIndex={10}
                >
                    {">"}
                </IconButton>
            </Flex>
        </Box>
    );
};

export default ProjectsShowcase;