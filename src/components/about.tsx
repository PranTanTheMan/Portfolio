import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  Box,
  chakra,
  Heading,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
  useDisclosure,
  Button,
  Progress,
  Icon,
} from "@chakra-ui/react";
import Styles from "../styles/about.module.css";
import styled from "styled-components";
import { Blob1 } from "./Icon/blob";
import { Blob2 } from "./Icon/blob";
import {
  NextJS,
  Python,
  Java,
  Javascript,
  PostgreSQL,
  Typescript,
  ReactLogo,
  HTMLCSS,
} from "./Icon/icons";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
export default function about() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("animate0");
        } else {
          entry.target.classList.remove("animate0");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden0");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  const StyledText = styled.div`
    ul.skills-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(140px, 200px));
      padding: 0;
      margin-top: 20px;
      margin-left: 60px;
      overflow: hidden;
      list-style: none;
      li {
        position: relative;
        padding-left: 20px;
        color: rgba(180, 180, 180, 1);
        font-weight: 600;
        font-size: 24px;
        &:before {
          content: "»";
          position: absolute;
          padding-top: 12px;
          left: 0;
          line-height: 12px;
          font-size: 24px;
          color: #fff159de;
        }
      }
    }
  `;
  const skills = [
    "Javascript",
    "Typescript",
    "Java",
    "Python",
    "Next.js",
    "HTML",
    "CSS",
    "SCSS/SASS",
    "Figma",
    "Adobe Photoshop",
    "React",
    "MongoDB",
  ];

  const Overlay = () => (
    <ModalOverlay bg="bgColorLight" backdropFilter="blur(10px)" />
  );

  const { onOpen, isOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<Overlay />);

  type progressData = {
    logo: any;
    title: string;
    value: number;
  };

  const progressData: progressData[] = [
    {
      logo: HTMLCSS,
      title: "HTML & CSS",
      value: 95,
    },
    {
      logo: Java,
      title: "Java",
      value: 65,
    },
    {
      logo: Javascript,
      title: "Javascript",
      value: 74,
    },
    {
      logo: Typescript,
      title: "Typescript",
      value: 55,
    },

    {
      logo: Python,
      title: "Python",
      value: 32,
    },
    {
      logo: NextJS,
      title: "Next.js",
      value: 77,
    },
    {
      logo: ReactLogo,
      title: "React",
      value: 67,
    },
    {
      logo: PostgreSQL,
      title: "PostgreSQL",
      value: 47,
    },
  ];
  // LAUGH NOW CRY LATER
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <chakra.div minHeight={"100vh"} className={Styles.aboutContainer}>
        <chakra.div className={Styles.who}>
          <Heading
            fontWeight={"700"}
            fontSize={"42px"}
            display={"flex"}
            alignItems={"center"}
            mb={"10px"}
            as={motion.h1}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s ease-in-out",
              transitionDelay: "0.2s",
            }}
          >
            Who Am I? <chakra.div className="dash"></chakra.div>
          </Heading>
          <Text
            fontWeight={"500"}
            fontSize={"24px"}
            color={"textDark"}
            lineHeight={"25px"}
            as={motion.p}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s ease-in-out",
              transitionDelay: "0.5s",
            }}
          >
            Nice to meet you. I'm Pranith, A tech enthusiast and a self-taught
            web developer located in Minnesota, US.
          </Text>
          <br />
          <Text
            fontWeight={"500"}
            fontSize={"24px"}
            color={"textDark"}
            lineHeight={"25px"}
            as={motion.p}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s ease-in-out",
              transitionDelay: "0.8s",
            }}
          >
            My love for coding began when I started programming lego robots and
            now I'm engineering/programming full-fledged robots. I enjoy
            creating personal full-stack projects and projects with others in
            Hackathons and as a hobby. I'm currently learning Java&apos;s
            Framework: Spring-Boot and I plan to contribute to more open-source
            projects.{" "}
            <chakra.button
              fontWeight={"500"}
              fontSize={"24px"}
              color={"textDark"}
              opacity={"0.5"}
              _hover={{
                textDecoration: "#fff159de underline",
                cursor: "none",
              }}
              onClick={() => {
                setOverlay(<Overlay />);
                onOpen();
              }}
            >
              Additional info
            </chakra.button>
            <Modal
              isCentered
              isOpen={isOpen}
              onClose={onClose}
              motionPreset="slideInBottom"
            >
              {overlay}
              <ModalContent
                bgColor={"#44133d"}
                cursor={"none"}
                className={Styles.modalContent}
              >
                <ModalHeader fontWeight={"700"} fontSize={"25px"}>
                  Additional Information
                </ModalHeader>
                <ModalBody>
                  <Image
                    src="/githubStats.svg"
                    alt="github stats"
                    width={"495"}
                    height={"195"}
                  />
                  <Flex alignItems={"center"}>
                    <Heading>Deadlift: </Heading>
                    <Text
                      fontSize={"28px"}
                      fontWeight={"700"}
                      pt={"3px"}
                      pl={"10px"}
                      color={"textDark"}
                    >
                      225lbs
                    </Text>
                  </Flex>
                  <Flex>
                    <Heading>Squat: </Heading>
                    <Text
                      fontSize={"28px"}
                      fontWeight={"700"}
                      pt={"3px"}
                      pl={"10px"}
                      color={"textDark"}
                    >
                      170lbs
                    </Text>
                  </Flex>
                  <Flex>
                    <Heading>Bench: </Heading>
                    <Text
                      fontSize={"28px"}
                      fontWeight={"700"}
                      pt={"3px"}
                      pl={"10px"}
                      color={"textDark"}
                    >
                      100lbs
                    </Text>
                  </Flex>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Text>
          <br />
          <Text
            fontWeight={"500"}
            fontSize={"24px"}
            color={"textDark"}
            lineHeight={"25px"}
            as={motion.p}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s ease-in-out",
              transitionDelay: "1.2s",
            }}
          >
            Technolgies I use:
          </Text>
          <StyledText>
            <ul className="skills-list">
              {skills &&
                skills.map((skills, i) => (
                  <li key={`skills-${i}`}>{skills}</li>
                ))}
            </ul>
          </StyledText>
        </chakra.div>
        <chakra.div className={Styles.stats}>
          <Box className={Styles.blob1} zIndex="-1">
            <Blob1 />
          </Box>
          <Box className={Styles.blob2} zIndex="-1">
            <Blob2 />
          </Box>
          <Box
            bgColor={"rgba(176,176,176,0.20)"}
            height={"680px"}
            className={"stats"}
            alignItems={"center"}
            p={"20px 0px 0px 24px"}
            textAlign={"left"}
            zIndex={"2"}
            borderRadius={"10px"}
          >
            <Box className={Styles.myStats} ref={ref}>
              <Heading
                as={motion.h1}
                style={{
                  opacity: isInView ? 1 : 0,
                  transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1)",
                  transitionDelay: "0.5s",
                }}
              >
                Fluency in Languages
              </Heading>
              <VStack pt={"30px"}>
                {progressData.map((data, i) => (
                  <>
                    <motion.span
                      style={{
                        transform: isInView ? "none" : "translateX(200px)",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1)",
                        transitionDelay: `${i * 0.2}s`,
                      }}
                    >
                      <Icon as={data.logo} />
                    </motion.span>
                    <motion.div
                      key={i}
                      style={{
                        transform: isInView ? "none" : "none",
                        opacity: isInView ? 1 : 0,
                        transition:
                          "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
                        transitionDelay: "0.5s",
                      }}
                    >
                      <Progress
                        key={`progress-${i}`}
                        value={data.value}
                        width={"300px"}
                        colorScheme={"yellow"}
                      />
                    </motion.div>
                  </>
                ))}
              </VStack>
            </Box>
          </Box>
        </chakra.div>
      </chakra.div>
    </>
  );
}
