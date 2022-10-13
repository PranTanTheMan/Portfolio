import React, { useEffect } from "react";
import {
  Flex,
  Text,
  Image,
  chakra,
  VStack,
  Box,
  Container,
} from "@chakra-ui/react";

export default function about() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <>
      <VStack>
        <Box>Who Am I</Box>
        <Box>Tech Stack</Box>
        <Box>Experience</Box>
      </VStack>
    </>
  );
}
