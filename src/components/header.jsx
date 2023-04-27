import { useState } from "react";
import {
  Flex,
  Box,
  Link,
  Text,
  IconButton,
  useColorModeValue,
  textDecoration,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const bg = "bg";
  const boxShadow = "0 1px 10px rgba(255, 255, 255, 0.1)";

  return (
    //@ts-ignore
    <Flex
      as="nav"
      align="center"
      justify={{ base: "flex-start", md: "center" }}
      w="100%"
      maxW={{ base: "350px", md: "500px" }}
      px={[4, 6]}
      py={{ base: "0", md: "6" }}
      bg={bg}
      flexWrap="wrap"
      boxShadow={boxShadow}
      position="fixed"
      style={{
        backdropFilter: "blur(10px)",
        transition: "filter 0.5s ease",
        zIndex: 1,
        top: "20px",
        left: "0",
        right: "0",
        margin: "auto",
      }}
      borderRadius={"20px"}
      outline="1px solid rgba(255, 255, 255, 0.13)"
    >
      <Box display={{ base: "flex", md: "none" }}>
        {/* @ts-ignore */}
        <IconButton
          aria-label="Toggle menu"
          icon={isOpen ? <FiX /> : <FiMenu />}
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          size="lg"
        />
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Link href="#">
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 10,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.2 }}
          >
            <Image
              borderRadius="full"
              boxSize="9"
              src="Pranith.jpeg"
              alt="Pranith"
            />
          </motion.div>
        </Link>
      </Box>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        justifyContent={{ base: "flex-start", md: "center" }}
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        pb={{ base: 4, md: 0 }}
        ml={{ base: 5, md: 0 }}
        textDecoration="none"
      >
        <Link
          _hover={{
            textDecoration: "none !important",
          }}
          href="#about"
        >
          <Text
            mr={{ base: 0, md: 6 }}
            mb={{ base: 4, md: 0 }}
            fontSize={{ base: "xl", md: "xl" }}
            fontWeight={"semibold"}
            transition="all 0.3s ease-in-out"
            _hover={{
              textDecoration: "none !important",

              transition: "all 0.3s ease-in-out",
              color: "#a42a92",
              transform: "translateY(-2px)",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            About me
          </Text>
        </Link>
        <Link
          _hover={{
            textDecoration: "none !important",
          }}
          href="#projects"
        >
          <Text
            mr={{ base: 0, md: 6 }}
            mb={{ base: 4, md: 0 }}
            fontSize={{ base: "xl", md: "xl" }}
            fontWeight={"semibold"}
            _hover={{
              textDecoration: "none",
              textDecorationThickness: "2px",
              transition: "all 0.3s ease-in-out",
              color: "#a42a92",
              transform: "translateY(-2px)",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Projects
          </Text>
        </Link>
        <Link
          _hover={{
            textDecoration: "none !important",
          }}
          href="#experience"
        >
          <Text
            mr={{ base: 0, md: 6 }}
            mb={{ base: 4, md: 0 }}
            fontSize={{ base: "xl", md: "xl" }}
            fontWeight={"semibold"}
            _hover={{
              textDecoration: "none",
              textDecorationThickness: "2px",
              transition: "all 0.3s ease-in-out",
              color: "#a42a92",
              transform: "translateY(-2px)",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Experience
          </Text>
        </Link>
        <Link
          _hover={{
            textDecoration: "none !important",
          }}
           href="#contact"
        >
          <Text
            fontWeight={"semibold"}
            fontSize={{ base: "xl", md: "xl" }}
            _hover={{
              textDecoration: "none",
              textDecorationThickness: "2px",
              transition: "all 0.3s ease-in-out",
              color: "#a42a92",
              transform: "translateY(-2px)",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Contact
          </Text>
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
