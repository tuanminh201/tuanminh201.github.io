import { Box, Text, Badge, VStack, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import Rocket from "../assets/img/rocket.png";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);

export default function Home() {
    const rocketControls = useAnimation();
    const smokeControls1 = useAnimation();
    const smokeControls2 = useAnimation();
    const smokeControls3 = useAnimation();
    const longFireTrailControls = useAnimation();

    const [countdown, setCountdown] = useState<number | null>(null);
    const [launching, setLaunching] = useState(false);
    const [showHint, setShowHint] = useState(true);

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
                setShowHint(false); // Ẩn hint khi launch
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

            setShowHint(true); // Hiện lại hint khi quay về
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
            <VStack align="flex-start" position="absolute" left="10%" top="40%">
                <Badge
                    colorScheme="purple"
                    px={4}
                    py={2}
                    fontSize="md"
                    borderRadius="md"
                >
                    Welcome to my Portfolio
                </Badge>
                <Text fontSize="7xl" fontWeight="bold" color="white">
                    Hi! I'm Tuan Minh
                </Text>
                <Text fontSize="lg" opacity={0.8} maxW="500px" color="white">
                    A CS student at Johannes Gutenberg University of Mainz
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
