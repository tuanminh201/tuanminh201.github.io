import React from "react";
import {
    Box,
    Heading,
    SimpleGrid,
    VStack,
    HStack,
    Text,
    Icon
} from "@chakra-ui/react";
import {
    FaCode,
    FaServer,
    FaDatabase,
    FaRobot,
    FaChartBar
} from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";

const offers = [
    {
        title: "Frontend Development",
        description: "Modern, responsive, and user-friendly web interfaces using React and TypeScript.",
        icon: FaCode
    },
    {
        title: "Backend & API Services",
        description: "Scalable REST APIs and robust server-side logic using Java, Node.js, and Flask.",
        icon: FaServer
    },
    {
        title: "Database Engineering",
        description: "Efficient management of relational and NoSQL databases like MySQL and MongoDB.",
        icon: FaDatabase
    },
    {
        title: "AI & ML Solutions",
        description: "Build and deploy machine learning models using TensorFlow and PyTorch for real-world applications.",
        icon: FaRobot
    },
    {
        title: "Data Analytics & Automation",
        description: "Data dashboards and Excel automations using Power BI and VBA to drive insights and save time.",
        icon: FaChartBar
    },
];

const Offers = () => {
    return (
        <Box bg="transparent" color="white" px={6} py={20}>
            <Heading mb={10} fontSize="4xl" textAlign="center">
                What I Offer
            </Heading>

            <SimpleGrid columns={1} gap={6} maxW="900px" mx="auto">
                {offers.map((offer, index) => (
                    <Box
                        key={index}
                        bg="#1a1a1a"
                        p={6}
                        borderRadius="md"
                        boxShadow="md"
                        _hover={{
                            transform: "scale(1.02)",
                            transition: "0.2s ease-in-out"
                        }}
                    >
                        <HStack gap={4} align="start">
                            <Icon as={offer.icon} boxSize={8} mt={1} />
                            <VStack align="start" gap={1}>
                                <Heading fontSize="lg">{offer.title}</Heading>
                                <Text fontSize="sm" color="gray.300">
                                    {offer.description}
                                </Text>
                            </VStack>
                        </HStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Offers;
