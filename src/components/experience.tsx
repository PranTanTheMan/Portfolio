import React from "react";
import {
  Flex,
  Text,
  Button,
  Heading,
  HStack,
  Icon,
  Center,
  chakra,
} from "@chakra-ui/react";
import JobCard from "./jobCard";
import Link from "next/link";
import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export default function experience() {
  return (
    <>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"25px"}
        minHeight={"100vh"}
        my={"100px"}
      >
        <Center flexDirection={"column"}>
          <Heading
            fontSize={"68px"}
            pl={{ base: "8px", md: "0px" }}
            id={"experience"}
          >
            <chakra.span textColor={"textColorLight"} fontSize={"80px"}>
              {"<"}
            </chakra.span>
            Experience
            <chakra.span textColor={"textColorLight"} fontSize={"80px"}>
              {"/>"}
            </chakra.span>
          </Heading>
          <Text
            width={{ base: "370px", md: "690px" }}
            fontSize={{ base: "18px", md: "26px" }}
            fontWeight={"600"}
            textAlign={"center"}
            textColor={"textColorMed"}
            mb={"30px"}
          >
            A few of the non-profit organizations and companies that I have
            worked for and the responsbilities I present(ed) during my time
            there.
          </Text>
        </Center>
        {/* Component */}
        <JobCard />

        <HStack maxWidth={"500px"}>
          <Link
            href={"https://www.linkedin.com/in/pranith-molakalapalli/"}
            target={"_blank"}
          >
            <Button
              border={"1px solid #ffed29"}
              p={"10px 30px 35px 30px"}
              color={"#ffed29"}
              variant={"unstyled"}
              transition="0.3s all ease-in-out"
              _hover={{ bg: "#fffff915" }}
            >
              <Flex justifyContent={"center"} alignItems={"center"} gap={"5px"}>
                <Text>Learn More</Text>
                <Icon as={ExternalLinkIcon} />
              </Flex>
            </Button>
          </Link>
          {/*  */}
          {/* Change the resume pdf. */}
          {/* <Link href={"/Pranith-Resume.pdf"} download target={"_blank"}>
            <Button
              p={"10px 30px 35px 30px"}
              bg={"#ffed29"}
              color={"#000"}
              variant={"unstyled"}
              transition="0.3s all ease-in-out"
              _hover={{
                bg: "transparent",
                color: "#ffed29",
                border: "1px solid #ffed29",
              }}
            >
              <Flex justifyContent={"center"} alignItems={"center"} gap={"8px"}>
                <Text>Resume</Text>
                <Icon as={DownloadIcon} />
              </Flex>
            </Button>
          </Link> */}
        </HStack>
      </Flex>
    </>
  );
}
