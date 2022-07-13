import { Flex, HStack, Box, Text, Spacer, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextChakraLink from "./nextChakraLink";

export default function Main() {
  return (
    <>
      <Flex
        width="100%"
        bg="rgba(23, 21, 21, 0.145)"
        height="100px"
        alignItems="center"
      >
        <Flex alignContent="center" width="100%">
          <Box className="Logo" ml="25px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-triangle"
              viewBox="0 0 16 16"
            >
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
            </svg>
          </Box>
          <Spacer />
          <HStack spacing="75px" ml="120px">
            <NextChakraLink href="/">
              <Text className="nav-links">About me</Text>
            </NextChakraLink>
            <NextChakraLink href="/">
              <Text className="nav-links">Work</Text>
            </NextChakraLink>
            <NextChakraLink href="/">
              <Text className="nav-links">Projects</Text>
            </NextChakraLink>
          </HStack>
          <Spacer />
          <Button className="contact-button" mr="80px" variant="unstyled">
            <Text className="nav-link-button">Contact Me</Text>
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
