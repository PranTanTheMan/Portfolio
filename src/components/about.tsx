import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Flex, Text } from "@chakra-ui/react";

const StyledContainer = styled.div`
  width: 100%;
  height: 95vh;
  background-color: #1b1d27;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .h1 {
    color: #fff;
    font-size: 3.5rem;
    font-weight: bold;
  }

  .aboutMeImage {
    border-radius: 170px;
  }
  ol {
    list-style: none;
    counter-reset: steps;
    columns: 2;
    margin-top: 1.5rem;
  }
  ol li {
    counter-increment: steps;
  }
  ol li::before {
    content: "0" counter(steps) " ";
    color: #9a6aff;
    font-size: 1.5rem;
  }
  li {
    font-size: 1.5rem;
    font-weight: 600;
    color: rgba(186, 186, 186, 1);
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
`;

export default function About() {
  return (
    <>
      <StyledContainer>
        <Flex justifyContent={"center"} pl={"7rem"}>
          <Image
            className='aboutMeImage'
            src={"/hotpicMYEYESONLY.JPG"}
            width={"456px"}
            height={"541px"}
            alt='aboutmeimage'
          />
          <Flex flexDirection={"column"} alignItems={"center"} ml={"6rem"}>
            <Text className='h1'>About Me</Text>
            <Text w={"700px"} fontSize={"1.5rem"} color={"darkgrey"}>
              <Text mb={"1rem"}>
                Hello, I am Pranith Molakalapalli. I am a problem solver,
                Engineer, and Creator.
              </Text>
              <Text mb={"1rem"}>
                I am a self-taught programmer learning with ambition. I have a
                passion for tech since involving myself in FIRST robotics since
                2014 and I have been working on building and designing software
                since then.
              </Text>
              {/* <br /> I am currently running a non-profit organization called{" "}
              <NextChakraLink href='https://techoptimum.org/' target={"_blank"}>
                <span>Tech Optimum</span>
              </NextChakraLink>{" "}
              helping high school and college students start their journey in
              computer science or currently help them in their computer science
              career. <br /> */}
              <Text mb={"1rem"}>
                I am also learning new technologies such as web 3.0 and I am
                always looking for new opportunities to learn and grow.
              </Text>

              <Text>A couple of technologies I am currently working with:</Text>
            </Text>
            <ol>
              <li>Next.js</li>
              <li>React</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Java</li>
              <li>Typescript</li>
              <li>Python</li>
            </ol>
          </Flex>
        </Flex>
      </StyledContainer>
    </>
  );
}
