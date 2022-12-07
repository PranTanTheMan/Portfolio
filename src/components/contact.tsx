import React from "react";
import {
  Center,
  Heading,
  chakra,
  Text,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import Link from "next/link";
export default function contact() {
  const icons = [
    {
      icon: <FiGithub />,
      to: "https://github.com/prantantheman",
    },
    {
      icon: <FiLinkedin />,
      to: "https://www.linkedin.com/in/pranith-molakalapalli/",
    },
    {
      icon: <FiMail />,
      to: "mailto:pranithmolakalapalli@gmail.com",
    },
    {
      icon: <FiInstagram />,
      to: "https://www.instagram.com/itsyaboipranith/",
    },
    {
      icon: <FiTwitter />,
      to: "https://twitter.com/prantantheman",
    },
  ];
  return (
    <>
      <Center flexDirection={"column"} minHeight={"82vh"} pb={"120px"}>
        <Heading fontSize={"62px"} pl={{ base: "8px", md: "8px" }}>
          <chakra.span textColor={"textColorLight"} fontSize={"80px"}>
            {"<"}
          </chakra.span>
          Contact Me
          <chakra.span textColor={"textColorLight"} fontSize={"80px"}>
            {"/>"}
          </chakra.span>
        </Heading>
        <Text
          width={"370px"}
          fontSize={{ base: "18px", md: "26px" }}
          fontWeight={"600"}
          textAlign={"center"}
          textColor={"textColorMed"}
          mb={"45px"}
        >
          You know who I am, you know what I do, and now you know how to reach
          me. What are you waiting for?
        </Text>
        <Heading
          color={"#ffed29"}
          filter={"brightness(1.5)"}
          fontWeight={"400"}
          fontSize={"28px"}
          textAlign={"center"}
          mb={"15px"}
        >
          Let's Connect
        </Heading>
        <HStack spacing={15}>
          {icons.map((icons) => (
            <Link href={icons.to} target={"_blank"}>
              <IconButton
                variant={"unstyled"}
                border={"1px solid #ffe4"}
                aria-label="contact-icon"
                icon={icons.icon}
                size={"md"}
                display={"flex"}
                _hover={{ bg: "#ffed29", color: "#000" }}
              />
            </Link>
          ))}
        </HStack>
      </Center>
    </>
  );
}
