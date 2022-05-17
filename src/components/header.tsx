import { Heading, HStack } from "@chakra-ui/react";
import NextChakraLink from "@components/nextChakraLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Main() {
  return (
    <HStack
      justify="space-between"
      bg="#F9DBBD"
      px="50px"
      py="10px"
      as="header"
    >
      <Heading>SI</Heading>
      <HStack justify="center" align="center">
        <NextChakraLink href="https://github.com/HazimAr/" aria-label="Github">
          <FaGithub size="30px" />
        </NextChakraLink>
        <NextChakraLink
          href="https://www.linkedin.com/in/hazim-arafa-a439aa205/"
          aria-label="LinkedIn"
        >
          <FaLinkedin size="30px" />
        </NextChakraLink>
      </HStack>
    </HStack>
  );
}
