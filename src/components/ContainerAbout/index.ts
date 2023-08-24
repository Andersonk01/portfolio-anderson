"use client";
import styled from "styled-components";

export const ContainerAbout = styled.section`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 2fr;
  gap: 2px;

  margin: 0 auto;
  padding: 20px;

  transition: all 1s ease;

  @media (max-width: 1264px) {
    grid-template-columns: 1fr 1.6fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
