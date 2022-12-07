import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Flex
          w="100%"
          as="footer"
          flexDir={{
            base: "column",
            sm: "row",
          }}
          align="center"
          justify="center"
          height={"auto"}
          py={7}
          m={0}
        >
          <Text textAlign={"center"} fontSize={"18px"} fontWeight={"400"}>
            Made with Next.Js, ChakraUI, and Typescript by
            <strong> Pranith Molakalapalli 💜</strong>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
