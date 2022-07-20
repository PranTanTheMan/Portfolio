import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Bg from "@components/bg";
import NextChakraLink from "./nextChakraLink";
function Hero() {
  return (
    <>
      <Flex flexDir="column" ml="300px">
        <Text color="#9a6aff" letterSpacing="3px" fontWeight="500">
          Hello there! I am
        </Text>
        <Text fontSize="7xl" className="hero-name">
          Pranith Molakalapalli
        </Text>
      </Flex>
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
