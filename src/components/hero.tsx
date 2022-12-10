import React, { useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  useBreakpointValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
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
      <Box
        className={"hero-container"}
        transition={"all 0.5s ease-in-out"}
        pl={{ base: "20px", md: "0" }}
      >
        <Text
          fontWeight={"600"}
          fontSize={introSize}
          color={"textColorLight"}
          transition={"all 0.5s ease-in-out"}
        >
          Hi, my name is
        </Text>
        <Text
          lineHeight={lineheight}
          fontWeight={"700"}
          fontSize={nameSize}
          color={"textColor"}
          className={"hero-name"}
          transition={"all 0.5s ease-in-out"}
          _hover={{ cursor: "none" }}
        >
          Pranith Molakalapalli
        </Text>
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
      </Box>
      <VisuallyHidden id="about">About</VisuallyHidden>
    </>
  );
}

export default Hero;
