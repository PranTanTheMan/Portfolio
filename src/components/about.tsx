import React from "react";
import styled from "styled-components";

export default function About() {
  const StyledContainer = styled.div`
    margin-rigth: 4rem;
    width: 100%;
    background-color: #1e1029;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <>
      <StyledContainer>
        <h1>About</h1>
      </StyledContainer>
    </>
  );
}
