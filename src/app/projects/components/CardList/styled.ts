"use client";
import styled, { keyframes } from "styled-components";

type CardListWrapperProps = {
  $showTooltip: boolean;
};

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const CardListWrapper = styled.div<CardListWrapperProps>`
  position: relative;
  overflow: hidden;

  max-width: 290px;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: #f2f2f2;

  &:hover {
    background-color: #00000010;
    > div h1 {
      font-size: 1.1rem;
    }
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px;

    width: 100%;
    background: transparent;
    display: ${(props) => (props.$showTooltip ? "grid" : "none")};
    z-index: 1000;

    transform: translateY(-60%);

    place-items: center;
    transition: all 0.3s ease;

    &:hover {
      height: 80px !important;
      transform: translateY(0);
      > a {
        background-color: #48ebcf;
        animation: ${bounceAnimation} 2s ease-in-out both;
      }
    }
  }

  a {
    width: min-content;
    height: min-content;
    background-color: #00000010;

    border-radius: 5px;
    padding: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-bottom: 2px solid #00b294;
    cursor: pointer;
  }

  h1 {
    font-size: 1.2rem;
    text-align: start;
    width: 100%;

    margin-inline: 10px 10px;
    padding: 10px 10px 10px 0;
    color: #00000090;
  }

  p {
    width: 100%;
    height: min-content;

    font-size: 0.8rem;
    padding: 0 0 0 10px;
    text-align: start;
  }
`;
