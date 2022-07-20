// import { Box, IconButton } from "@chakra-ui/react";
// import NextChakraLink from "./nextChakraLink";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Flex, VStack, Box, IconButton } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex justifyContent="flex-start" ml="20px" mt="100px" position="sticky">
        <VStack spacing="20px">
          <Box>
            <IconButton
              aria-label="GithubButton"
              icon={<FaGithub fontSize="30px" />}
              variant="unstyled"
            />
          </Box>
          <Box>
            <IconButton
              aria-label="LinkedinButton"
              icon={<FaLinkedin fontSize="30px" />}
              variant="unstyled"
            />
          </Box>
          <Box>
            <IconButton
              aria-label="TwitterButton"
              icon={<FaTwitter fontSize="30px" />}
              variant="unstyled"
            />
          </Box>
          <Box>
            <IconButton
              aria-label="instagramButton"
              icon={<FaInstagram fontSize="30px" />}
              variant="unstyled"
            />
          </Box>
        </VStack>
      </Flex>
    </>
  );
}
