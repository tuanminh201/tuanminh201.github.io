import { Box, Text, VStack, HStack, Icon, Flex, Badge, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import DBLogo from "../assets/img/db_logo.png";

const MotionBox = motion(Box);

const experiences = [
    {
        role: "Working Student - Data Analyst",
        company: "DB InfraGO GmbH",
        time: "Oct 2023 - Present",
        tech: ["Data Analysis","VBA/Excel","PowerBI"],
        highlights: [
            "Collected and organized datasets from various sources",
            "Cleaned and preprocessed data to ensure accuracy and consistency",
            "Performed statistical analyses and created insightful reports",
            "Collaborated with teams to support data-driven initiatives"
        ],
        side: "left",
        color: "purple",
        logo: DBLogo
    },
    {
        role: "Customer Support & English Tutor",
        company: "Uni English Zentrum",
        time: "Aug 2018 - Jun 2019",
        tech: ["Communication", "Customer Service"],
        highlights: [
            "Advised and supported students with their language needs",
            "Worked as an English tutor for both kids and adults"
        ],
        side: "right",
        color: "blue"
    }
];

export default function ExperienceTimeline() {
    const borderColor = "gray.600";

    return (
        <Box position="relative" maxW="6xl" mx="auto" py={10} px={6}>
            <Text fontSize="5xl" fontWeight="bold" textAlign="center" mb={12} color="white">
                🗓 Work Experience Timeline
            </Text>

            <Box position="relative" height="100%" ml="1px">
                <Box
                    position="absolute"
                    top={0}
                    left="50%"
                    transform="translateX(-50%)"
                    width="2px"
                    height="100%"
                    bg={borderColor}
                    zIndex={0}
                />

                {experiences.map((exp, index) => (
                    <Flex
                        key={index}
                        justify={exp.side === "left" ? "flex-end" : "flex-start"}
                        mb={16}
                        position="relative"
                    >
                        <MotionBox
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            bg="whiteAlpha.100"
                            backdropFilter="blur(5px)"
                            borderLeft={exp.side === "left" ? "none" : "4px solid"}
                            borderRight={exp.side === "right" ? "none" : "4px solid"}
                            borderColor={`${exp.color}.400`}
                            borderRadius="md"
                            p={6}
                            w="full"
                            maxW="lg"
                            zIndex={1}
                        >
                            <HStack  alignItems="center" mb={2}>
                                <Icon as={FaBriefcase} color={`${exp.color}.400`} boxSize={6} />
                                <Text fontWeight="bold" fontSize="xl" color="white">
                                    {exp.role}
                                </Text>
                            </HStack>
                            <HStack  alignItems="center" mb={1}>
                                {exp.logo && (
                                    <Image src={exp.logo} alt="logo" boxSize="30px" objectFit="contain" />
                                )}
                                <Text fontWeight="semibold" fontSize="lg" color={`${exp.color}.300`}>
                                    {exp.company}
                                </Text>
                            </HStack>
                            <Text fontSize="md" mb={2} color="gray.300">
                                {exp.time}
                            </Text>
                            <HStack  mb={2} wrap="wrap">
                                {exp.tech.map((tech, idx) => (
                                    <Badge key={idx} colorScheme={exp.color} variant="subtle" fontSize="sm">
                                        {tech}
                                    </Badge>
                                ))}
                            </HStack>
                            <VStack align="start" pt={2} color="gray.200">
                                {exp.highlights.map((point, i) => (
                                    <Text key={i} fontSize="md">• {point}</Text>
                                ))}
                            </VStack>
                        </MotionBox>
                    </Flex>
                ))}
            </Box>
        </Box>
    );
}
