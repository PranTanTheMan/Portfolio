import React from "react";
import Footer from "@components/footer";
import { Text, Box, Flex } from "@chakra-ui/react";
export default function Intro() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Text fontSize="lg">Hello World! </Text>
      </Box>
      <Flex mt="100px">
        <Footer />
      </Flex>
    </>
  );
}
