import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    Container,
    Grid,
    GridItem,
    Badge
} from '@chakra-ui/react';

// Import hình ảnh
import portfolioImage from '../assets/img/portfolio_preview.png';
import simulationImage from '../assets/img/simulation_ui.png';

const ProjectsShowcase = () => {
    const projects = [
        {
            title: "Portfolio Website",
            time: "2024",
            tools: ["React", "TypeScript", "Chakra UI"],
            image: portfolioImage, // Dùng hình ảnh đã import
            description: [
                "Built a personal portfolio with rocket animation, typing effect, and smooth scroll.",
                "Responsive layout using Chakra UI and Framer Motion."
            ]
        },
        {
            title: "Active Learning Simulation UI",
            time: "2024",
            tools: ["React", "TypeScript", "MATLAB Simulink"],
            image: simulationImage, // Dùng hình ảnh đã import
            description: [
                "Frontend UI for an active learning simulator.",
                "Collaborated with research team on rendering components and simulation integration."
            ]
        }
    ];

    return (
        <Container maxW="container.xl" py={8}>
            <Heading
                textAlign="center"
                mb={8}
                bgGradient="linear(to-r, blue.500, purple.500)"
                bgClip="text"
            >
                My Projects
            </Heading>
            <Grid templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)']} gap={6}>
                {projects.map((project, index) => (
                    <GridItem key={index}>
                        <Box
                            bg="white"
                            boxShadow="lg"
                            borderRadius="xl"
                            overflow="hidden"
                            transition="transform 0.3s ease"
                            _hover={{
                                transform: 'scale(1.05)',
                                boxShadow: '2xl'
                            }}
                            bgGradient="linear(to-br, blue.50, purple.50)"
                        >
                            <Box p={6}>
                                <Flex justify="space-between" mb={4}>
                                    <Heading size="md" color="blue.700">
                                        {project.title}
                                    </Heading>
                                    <Text fontSize="sm" color="gray.500">
                                        {project.time}
                                    </Text>
                                </Flex>

                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        borderRadius="md"
                                        objectFit="cover"
                                        h="250px"
                                        w="full"
                                        mb={4}
                                    />
                                )}

                                <Box mb={4}>
                                    {project.description.map((desc, descIndex) => (
                                        <Text key={descIndex} fontSize="sm" color="gray.600" mb={2}>
                                            {desc}
                                        </Text>
                                    ))}
                                </Box>

                                <Flex wrap="wrap">
                                    {project.tools.map((tool, toolIndex) => (
                                        <Badge
                                            key={toolIndex}
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
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Container>
    );
};

export default ProjectsShowcase;
