import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #1e2029;
`;

export default function Work() {
  return (
    <>
      <CenteredContainer>
        <Flex flexDirection={"column"} alignItems={"center"}>
          Work experience
        </Flex>
      </CenteredContainer>
    </>
  );
}
