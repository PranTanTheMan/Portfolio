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
      <Heading>Pran</Heading>
    </HStack>
  );
}
