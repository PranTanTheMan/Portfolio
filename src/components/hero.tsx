import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextChakraLink from "./nextChakraLink";
function Hero() {
  return (
    <>
      <Box className='container' ml={"10rem"} mt={"8rem"}>
        <Flex flexDir='column' alignItems={"flex-start"} h={"100vh"} w={"100%"}>
          <Text
            fontSize={"1.2rem"}
            color='primary'
            letterSpacing='3px'
            fontWeight='500'
            mb={"0px"}
            lineHeight='0px'
          >
            Hello there! My name is
          </Text>
          <Text
            fontSize='7rem'
            className='hero-name'
            mt={"0px"}
            flexShrink={"1"}
            maxWidth={"55rem"}
            lineHeight='130px'
          >
            Pranith Molakalapalli.
          </Text>
          <Text
            fontSize='6rem'
            className='hero-name'
            mt={"0px"}
            flexShrink={"1"}
            maxWidth={"55rem"}
            lineHeight='30px'
            mb={"3rem"}
            color='textColorLight'
          >
            Manipulating the web
          </Text>
          <Text
            w={"800px"}
            color={"textColorLight"}
            fontWeight={"600"}
            fontSize={"1.5rem"}
            lineHeight='30px'
            opacity={"40%"}
          >
            A self-taught web developer, High School Student, and a programming
            enthusiast exclusively in React
          </Text>
          <NextChakraLink href='mailto:pranithmolakalapalli@gmail.com'>
            <Button
              mt={"2rem"}
              variant={"unstyled"}
              borderRadius={"27px"}
              width={"150px"}
              height={"50px"}
              border='1px solid #9a6aff'
              fontWeight={"700"}
              fontSize={"1.2rem"}
              _hover={{ bgColor: "#996aff36" }}
            >
              Contact Me
            </Button>
          </NextChakraLink>
        </Flex>
      </Box>
    </>
  );
}

export default Hero;

// <Box className="bg-particle-thing">
//         <Bg />
//       </Box>
//       <Box
//         className="hero-image-container"
//         display="flex"
//         justifyContent="center"
//         pt="270px"
//         maxWidth="100%"
//       >
//         <NextChakraLink href="/intro" target="_self">
//           <motion.div whileHover={{ y: -20, scale: 1.05 }}>
//             <img
//               // ?ratio is 2.08:1
//               // lel
//               width="837px"
//               height="400px"
//               src="/business-3d-man-lying-on-stomach-with-laptop.png"
//               alt="man lying on stomach with laptop"
//               className="heroImage"
//             />
//           </motion.div>
//         </NextChakraLink>
//       </Box>
