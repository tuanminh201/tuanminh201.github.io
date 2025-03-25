import { keyframes } from "@emotion/react";
import { Box, Text, Badge, VStack, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Rocket from "../assets/img/rocket.png";
import Avatar from "../assets/img/avatar.png";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);

// Dấu nhấp nháy animation
const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`;

export default function Home() {
    const rocketControls = useAnimation();
    const smokeControls1 = useAnimation();
    const smokeControls2 = useAnimation();
    const smokeControls3 = useAnimation();
    const longFireTrailControls = useAnimation();

    const [countdown, setCountdown] = useState<number | null>(null);
    const [launching, setLaunching] = useState(false);
    const [showHint, setShowHint] = useState(true);

    // Typing animation
    const fullText = "Hi! I'm Tuan Minh";
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let index = 0;
        let deleting = false;

        const type = () => {
            if (!deleting) {
                if (index <= fullText.length) {
                    setTypedText(fullText.slice(0, index));
                    index++;
                    setTimeout(type, 100);
                } else {
                    setTimeout(() => {
                        deleting = true;
                        setIsDeleting(true);
                        index = fullText.length;
                        type();
                    }, 10000); // Đợi 30 giây
                }
            } else {
                if (index >= 0) {
                    setTypedText(fullText.slice(0, index));
                    index--;
                    setTimeout(type, 50);
                } else {
                    deleting = false;
                    setIsDeleting(false);
                    index = 0;
                    setTimeout(type, 300);
                }
            }
        };

        type();

        return () => {};
    }, []);

    const handleLaunch = async () => {
        if (launching) return;
        setLaunching(true);

        let count = 3;
        setCountdown(count);
        const countdownInterval = setInterval(() => {
            count--;
            if (count === 0) {
                clearInterval(countdownInterval);
                setCountdown(null);
                setShowHint(false);
                launchSequence();
            } else {
                setCountdown(count);
            }
        }, 800);
    };

    const launchSequence = async () => {
        rocketControls.start({
            y: [0, -2, 2, -1, 0],
            transition: { repeat: 2, duration: 0.3 },
        });

        smokeControls1.start({
            opacity: [0, 0.7, 0],
            scale: [0.5, 1.5, 2.5],
            y: [0, 10, 20],
            transition: { duration: 1.5 },
        });

        smokeControls2.start({
            opacity: [0, 0.8, 0],
            scale: [0.3, 1.2, 2],
            x: [0, -15, -25],
            y: [0, 15, 30],
            transition: { duration: 1.8, delay: 0.2 },
        });

        smokeControls3.start({
            opacity: [0, 0.6, 0],
            scale: [0.4, 1.3, 2.2],
            x: [0, 15, 25],
            y: [0, 12, 25],
            transition: { duration: 1.6, delay: 0.3 },
        });

        await new Promise((res) => setTimeout(res, 1500));

        rocketControls.start({
            y: -window.innerHeight,
            transition: { duration: 1.8, ease: "easeInOut" },
        });

        longFireTrailControls.start({
            height: window.innerHeight,
            opacity: 1,
            transition: {
                height: { duration: 1.8, ease: "easeInOut" },
                opacity: { duration: 0.5 }
            }
        });

        setTimeout(() => {
            longFireTrailControls.start({
                opacity: 0,
                transition: { duration: 1.5 }
            });
        }, 1500);

        setTimeout(() => {
            rocketControls.set({ y: window.innerHeight });

            rocketControls.start({
                y: 0,
                transition: { duration: 1.2, ease: "easeOut" }
            });

            longFireTrailControls.set({ height: 0, opacity: 0 });

            setShowHint(true);
            setLaunching(false);
        }, 3500);
    };

    return (
        <Box
            w="100%"
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="transparent"
            position="relative"
            overflow="hidden"
        >
            {/* Text bên trái */}
            <VStack align="flex-start" position="absolute" left="15%" top="25%">
                <Image
                    src={Avatar}
                    alt="Avatar"
                    boxSize="250px"
                    borderRadius="full"
                    border="3px solid white"
                    objectFit="cover"
                    transition="all 0.3s ease"
                    _hover={{ transform: "scale(1.05)", boxShadow: "0 0 15px white" }}
                />
                <Badge
                    colorScheme="purple"
                    px={4}
                    py={2}
                    fontSize="md"
                    borderRadius="md"
                >
                    Welcome to my Portfolio
                </Badge>
                <Text fontSize="7xl" fontWeight="bold" color="white" minH ="110px">
                    {typedText}
                    {(typedText !== "" || isDeleting) && (
                        <Box as="span" animation={`${blink} 1s step-start infinite`}>
                            |
                        </Box>
                    )}
                </Text>
                <Text fontSize="lg" opacity={0.8} maxW="500px" color="white">
                    Undergraduate student of Computer Science at JGU Mainz
                </Text>
                <Text fontSize="3xl" fontWeight="bold" maxW="500px" color="white">
                    About Me
                </Text>
                <Text fontSize="lg" opacity={0.8} maxW="700px" color="white" top="10%">
                    "Hi, I'm Minh, an IT student passionate about fullstack development and machine learning. I enjoy building interactive web applications using React, TypeScript, and CSS. My goal is to pursue a master's degree in Artificial Intelligence to deepen my expertise and contribute to innovative projects."
                </Text>
            </VStack>

            {/* Countdown */}
            {countdown !== null && (
                <Text
                    position="absolute"
                    top="20%"
                    right="10%"
                    fontSize="6xl"
                    fontWeight="bold"
                    color="yellow.300"
                    zIndex={10}
                >
                    {countdown}
                </Text>
            )}

            {/* Vệt lửa */}
            <MotionBox
                position="absolute"
                right="13%"
                bottom="10%"
                w="10px"
                h="0"
                zIndex={3}
                initial={{ opacity: 0, height: 0 }}
                animate={longFireTrailControls}
                style={{
                    background: "linear-gradient(to bottom, #ff4500, #ffa500)",
                    borderRadius: "0 0 15px 15px",
                    boxShadow: "0 0 10px #ff4500, 0 0 20px #ff4500",
                    filter: "blur(2px)",
                    transformOrigin: "center top"
                }}
            />

            {/* Khói */}
            <MotionBox
                position="absolute"
                right="10.5%"
                bottom="12%"
                w="40px"
                h="40px"
                bg="whiteAlpha.800"
                filter="blur(10px)"
                borderRadius="full"
                zIndex={1}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={smokeControls1}
            />
            <MotionBox
                position="absolute"
                right="9%"
                bottom="11%"
                w="35px"
                h="35px"
                bg="whiteAlpha.700"
                filter="blur(8px)"
                borderRadius="full"
                zIndex={1}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={smokeControls2}
            />
            <MotionBox
                position="absolute"
                right="12%"
                bottom="11.5%"
                w="30px"
                h="30px"
                bg="whiteAlpha.600"
                filter="blur(7px)"
                borderRadius="full"
                zIndex={1}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={smokeControls3}
            />

            {/* Rocket */}
            <MotionImage
                src={Rocket}
                alt="Rocket"
                w="150px"
                position="absolute"
                right="10%"
                bottom="10%"
                cursor="pointer"
                animate={rocketControls}
                initial={{ y: 0 }}
                onClick={handleLaunch}
                zIndex={5}
            />

            {/* Click me + dây nối */}
            {showHint && (
                <>
                    <MotionText
                        position="absolute"
                        right="9%"
                        bottom="24%"
                        fontSize="1xl"
                        fontWeight="semibold"
                        transform="rotate(35deg)"
                        color="whiteAlpha.900"
                        zIndex={4}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{
                            duration: 0.75,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        Click Me!
                    </MotionText>

                    <Box
                        position="absolute"
                        right="11%"
                        bottom="20%"
                        w="2px"
                        h="60px"
                        bg="whiteAlpha.600"
                        transform="rotate(35deg)"
                        transformOrigin="top"
                        zIndex={3}
                    />
                </>
            )}
        </Box>
    );
}
