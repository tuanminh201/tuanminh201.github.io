import React from "react";
import {
    Box,
    Grid,
    GridItem,
    Heading,
    Text,
    VStack,
    HStack
} from "@chakra-ui/react";
import {
    FaJs, FaPython, FaReact, FaNodeJs, FaJava, FaDatabase
} from "react-icons/fa";
import {
    SiCplusplus, SiTypescript, SiTensorflow, SiPytorch,
    SiFlask, SiPostman, SiPowerbi
} from "react-icons/si";
import { MdCode } from "react-icons/md"; // for VBA fallback icon

const skills = [
    {
        title: "JavaScript",
        description: "Essential for dynamic web development and frontends.",
        icon: <FaJs size="2em" color="#f7df1e" />
    },
    {
        title: "Python",
        description: "Ideal for data science, AI, and backend development.",
        icon: <FaPython size="2em" color="#3776AB" />
    },
    {
        title: "C++",
        description: "Powerful for performance-critical and system-level applications.",
        icon: <SiCplusplus size="2em" color="#00599C" />
    },
    {
        title: "Java",
        description: "Widely-used OOP language, perfect for enterprise-level backend development.",
        icon: <FaJava size="2em" color="#f89820" />
    },
    {
        title: "TypeScript",
        description: "Adds static typing to JavaScript for large-scale projects.",
        icon: <SiTypescript size="2em" color="#3178C6" />
    },
    {
        title: "ReactJS",
        description: "Powerful library for building interactive UIs.",
        icon: <FaReact size="2em" color="#61DAFB" />
    },
    {
        title: "NodeJS",
        description: "Server-side JavaScript runtime for scalable applications.",
        icon: <FaNodeJs size="2em" color="#68A063" />
    },
    {
        title: "TensorFlow",
        description: "End-to-end open-source platform for machine learning.",
        icon: <SiTensorflow size="2em" color="#FF6F00" />
    },
    {
        title: "PyTorch",
        description: "Flexible deep learning framework preferred by researchers.",
        icon: <SiPytorch size="2em" color="#EE4C2C" />
    },
    {
        title: "FlaskAPI",
        description: "Lightweight Python web framework for APIs.",
        icon: <SiFlask size="2em" color="#000000" />
    },
    {
        title: "RESTAPI",
        description: "Standard architecture for scalable API design.",
        icon: <SiPostman size="2em" color="#FF6C37" />
    },
    {
        title: "VBA",
        description: "Automates tasks in Excel and Office apps; handy for scripting and macros.",
        icon: <MdCode size="2em" color="#00A859" />
    },
    {
        title: "Power BI",
        description: "Business intelligence tool for interactive data visualizations and dashboards.",
        icon: <SiPowerbi size="2em" color="#F2C811" />
    }
];

const Skills = () => {
    return (
        <Box bg="transparent" color="white" minH="100vh" px={10} py={20}>
            <Heading mb={10} fontSize="4xl">
                My Skills
            </Heading>
            <Grid templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]} gap={6}>
                {skills.map((skill, index) => (
                    <GridItem
                        key={index}
                        bg="#1a1a1a"
                        p={6}
                        borderRadius="md"
                        boxShadow="md"
                        _hover={{ transform: "scale(1.03)", transition: "0.2s ease-in-out" }}
                    >
                        <VStack align="start" gap={3}>
                            <HStack gap={3}>
                                {skill.icon}
                                <Heading fontSize="lg">{skill.title}</Heading>
                            </HStack>
                            <Text fontSize="sm" color="gray.300">
                                {skill.description}
                            </Text>
                        </VStack>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;
