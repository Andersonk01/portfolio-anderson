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

  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1rem;
    font-weight: 800;
    font-style: oblique;
  }

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 10px;
    color: #000000;
  }
  h3 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 28px;
    padding-bottom: 5px;
    color: #000000;
    border-top: 1px solid #00000040;
  }

  h4 {
    font-weight: bold;
    font-size: 1.2rem;
    color: #00000095;
  }

  p {
    font-size: 1rem;
    margin: 10px 0;
  }

  span {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 1px solid #00000020;
  }

  @media (max-width: 1264px) {
    grid-template-columns: 1fr 1.6fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
