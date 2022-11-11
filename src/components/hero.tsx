import React, { useEffect } from "react";
import { Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
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
      base: "5xl",
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
      <Box className={"hero-container"} transition={"all 0.5s ease-in-out"}>
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
          textAlign={"center"}
          fontWeight={"700"}
          fontSize={nameSize}
          color={"textColor"}
          className={"hero-name"}
          transition={"all 0.5s ease-in-out"}
          _hover={{ cursor: "none" }}
        >
          Pranith Molakalapalli
        </Text>
        <Flex className="typewriter" fontSize={size}>
          {"<"}
          <Typewriter
            options={{
              strings: ["Building", "Designing", "Learning"],
              deleteSpeed: 50,
              autoStart: true,
              loop: true,
              cursor: " />",
              cursorClassName: "typewriter-cursor",
            }}
          />
          <Text pl={"5px"}>
            <a href="">for the Web</a>
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default Hero;
