"use client";

import styled, { keyframes } from "styled-components";

export const Wrapper = styled.section`
  width: 80%;
  height: 480px;
  max-width: 920px;
  margin: 40px 0;
  padding: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "esquerda direita"
    "esquerda direita"
    "inferior inferior";

  text-align: center;

  border-radius: 24px;
  background: #ffffff90;
  box-shadow: 24px 24px 60px #8f8f8f, -24px -24px 60px #ffffff;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: min-content;

    div {
      z-index: 2;
    }

    span {
      height: 250px;
      margin: 10px 0;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    grid-area: esquerda;
  }

  h1 {
    font-size: 1.9rem;
    width: 100%;
  }
  h2 {
    font-size: 16px;
    width: 100%;
  }

  div a {
    position: relative;
    background-color: #fff;
    height: 40px;
    width: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 100%;
      bottom: 0;
      right: 0;
      transition: all 0.3s ease-in-out;
      background-color: #48ebcf;
      z-index: -1;
    }
    &:hover {
      color: #000;
      &:after {
        width: 100%;
        right: auto;
        left: 0;
      }
    }
  }
  span {
    position: relative;
    padding: 10px;
    width: 100%;
    min-height: 300px;

    grid-area: direita;
  }

  span img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  section {
    grid-area: inferior;
  }
`;

const scroll = keyframes`
  0%, 100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px); 
  }
`;

export const SectionTechs = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;

  img {
    animation: ${scroll} infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  img:nth-child(1) {
    animation-duration: 4s;
  }

  img:nth-child(2) {
    animation-duration: 5s;
  }

  img:nth-child(3) {
    animation-duration: 3s;
  }

  img:nth-child(4) {
    animation-duration: 6s;
  }

  img:nth-child(5) {
    animation-duration: 4s;
  }

  img:nth-child(6) {
    animation-duration: 5s;
  }

  img:nth-child(7) {
    animation-duration: 3s;
  }
`;
