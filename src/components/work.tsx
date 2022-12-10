import React from "react";
import { Text, Heading, Center, chakra, Button } from "@chakra-ui/react";
import ProjectCard from "./projectCard";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <Center flexDirection={"column"}>
        <Heading
          fontSize={"72px"}
          mt={"40px"}
          pl={{ base: "7px", md: "0px" }}
          id={"projects"}
        >
          <chakra.span textColor={"textColorLight"} fontSize={"80px"}>
            {"<"}
          </chakra.span>
          Projects
          <chakra.span textColor={"textColorLight"} fontSize={"80px"}>
            {"/>"}
          </chakra.span>
        </Heading>
        <Text
          width={{ base: "370px", md: "670px" }}
          fontSize={{ base: "18px", md: "26px" }}
          fontWeight={"600"}
          textAlign={"center"}
          textColor={"textColorMed"}
        >
          An array of projects that I have worked on individually, in
          Hackathons, Team projects, and non-profit organizations.
        </Text>
      </Center>
      <section className="work-container">
        <Heading
          color={"#ffed29"}
          filter={"brightness(1.5)"}
          fontWeight={"400"}
          fontSize={"28px"}
          textAlign={"center"}
          mt={"20px"}
        >
          Featured
        </Heading>
        <ProjectCard />
        <Center>
          <Link href={"https://github.com/prantantheman"}>
            <Button
              mt={"50px"}
              border={"1px solid #ffed29"}
              p={"10px 40px 35px 40px"}
              color={"#ffed29"}
              variant={"unstyled"}
              transition="0.3s all ease-in-out"
              _hover={{
                bg: "#ffed29",
                color: "#000",
              }}
            >
              View More
            </Button>
          </Link>
        </Center>
      </section>
    </>
  );
}
