import { useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  useBreakpointValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const nameSize = useBreakpointValue(
    {
      base: "42px",
      lg: "9xl",
    },
    {
      fallback: "md",
    }
  );
  const size = useBreakpointValue(
    {
      base: "xl",
      md: "3rem",
    },
    {
      fallback: "md",
    }
  );
  const introSize = useBreakpointValue(
    {
      base: "xl",
      md: "3rem",
    },
    {
      fallback: "md",
    }
  );
  const lineheight = useBreakpointValue(
    {
      base: "40px",
      md: "100px",
    },
    {
      fallback: "md",
    }
  );
  return (
    <>
      <Box className={"hero-container"}>
        <ZoomIn delay={0.2} scale={1}>
          <Text
            fontWeight={"600"}
            fontSize={introSize}
            color={"textColorLight"}
          >
            Hi, my name is
          </Text>
        </ZoomIn>
        <ZoomIn delay={0.6} scale={1}>
          <Text
            lineHeight={lineheight}
            fontWeight={"700"}
            fontSize={nameSize}
            color={"textColor"}
          >
            Pranith Molakalapalli
          </Text>
        </ZoomIn>
        <ZoomIn delay={1} scale={1}>
          <Flex
            className="typewriter"
            fontSize={size}
            width={"100%"}
            justifyContent={"center"}
            color={"textColorLight"}
          >
            {"<"}
            <Typewriter
              options={{
                strings: ["Building", "Designing", "Learning", "Creating"],
                deleteSpeed: 45,
                autoStart: true,
                loop: true,
                cursor: "",
                cursorClassName: "typewriter-cursor",
              }}
            />
            {" /> "}
            for the Web
          </Flex>
        </ZoomIn>
      </Box>
      <VisuallyHidden id="about">About</VisuallyHidden>
    </>
  );
}

function ZoomIn({ delay = 0, scale = 0, children }) {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale,
      transition: {
        delay,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}

export default Hero;
