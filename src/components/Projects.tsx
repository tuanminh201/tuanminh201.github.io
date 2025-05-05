    import React, { useState } from 'react';
    import {
        Box,
        Flex,
        Heading,
        Text,
        Image,
        Badge,
        IconButton
    } from '@chakra-ui/react';
    import { motion, AnimatePresence } from 'framer-motion';


    import portfolioImage from '../assets/img/portfolio_preview.png';
    import simulationImage from '../assets/img/simulation_ui.png';
    import recipeProjectImage from '../assets/img/recipeProject.png';

    // Dự án
    const projects = [
        {
            title: 'AI-based Recipe Suggestion Website',
            time: '2025',
            tools: ['React', 'TypeScript', 'Bootstrap', 'Gemini 2.5'],
            image: recipeProjectImage,
            description: [
                'Developed a recipe suggestion website where users input available ingredients and preferences.',
                'Used Gemini 2.5 for AI-powered suggestions based on user data like BMI and cuisine taste.'
            ]
        },
        {
            title: 'Portfolio Website',
            time: '2024',
            tools: ['React', 'TypeScript', 'Chakra UI'],
            image: portfolioImage,
            description: [
                'Built a personal portfolio with rocket animation, typing effect, and smooth scroll.',
                'Responsive layout using Chakra UI and Framer Motion.'
            ]
        },
        {
            title: 'Active Learning Simulation UI',
            time: '2024',
            tools: ['React', 'TypeScript', 'MATLAB Simulink'],
            image: simulationImage,
            description: [
                'Frontend UI for an active learning simulator.',
                'Collaborated with research team on rendering components and simulation integration.'
            ]
        }
    ];

    // motion wrapper
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
            <Box maxW="100vw" px={[4, 8, 16]} py={16}>
                <Heading
                    textAlign="center"
                    mb={12}
                    fontSize={['3xl', '4xl', '5xl']}
                    bgGradient="linear(to-r, blue.400, purple.400)"
                    bgClip="text"
                >
                    My Projects
                </Heading>

                <Flex
                    align="center"
                    justify="center"
                    position="relative"
                    width="100%"
                    maxW="8xl"
                    mx="auto"
                >
                    {/* Nút trái */}
                    <IconButton
                        aria-label="Previous"
                        onClick={() => handleChange(false)}
                        borderRadius="full"
                        position="absolute"
                        left="-240px"
                        top="50%"
                        transform="translateY(-50%)"
                        size="lg"
                        bg="purple.600"
                        color="white"
                        fontSize="2xl"
                        fontWeight="bold"
                        _hover={{ bg: 'purple.700' }}
                        w="60px"
                        h="60px"
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
                        >
                            <Flex
                                direction={['column', null, 'row']}
                                bg="gray.100"
                                borderRadius="2xl"
                                boxShadow="2xl"
                                overflow="hidden"
                                p={[6, 10]}
                                align="center"
                                w="full"
                                minH={['auto', null, '500px']}
                            >
                                <Box flex="1" mb={[6, null, 0]} mr={[0, null, 10]}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        borderRadius="lg"
                                        objectFit="cover"
                                        w="100%"
                                        maxH="400px"
                                    />
                                </Box>

                                <Box flex="1">
                                    <Heading size="lg" mb={2} color="blue.700">
                                        {project.title}
                                    </Heading>
                                    <Text fontSize="sm" color="gray.600" mb={4}>
                                        {project.time}
                                    </Text>

                                    {project.description.map((desc, i) => (
                                        <Text key={i} fontSize="md" color="gray.700" mb={2}>
                                            {desc}
                                        </Text>
                                    ))}

                                    <Flex wrap="wrap" mt={4}>
                                        {project.tools.map((tool, i) => (
                                            <Badge
                                                key={i}
                                                colorScheme="purple"
                                                mr={2}
                                                mb={2}
                                                px={2}
                                                py={1}
                                                fontSize="sm"
                                            >
                                                {tool}
                                            </Badge>
                                        ))}
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
                        right="-240px"
                        top="50%"
                        transform="translateY(-50%)"
                        size="lg"
                        bg="purple.600"
                        color="white"
                        fontSize="2xl"
                        fontWeight="bold"
                        _hover={{ bg: 'purple.700' }}
                        w="60px"
                        h="60px"
                    >
                        {">"}
                    </IconButton>

                </Flex>
            </Box>
        );
    };

    export default ProjectsShowcase;
