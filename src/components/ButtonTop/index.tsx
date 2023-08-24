"use client";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

type Props = {
  $isVisible: boolean;
};

const HiddenDiv = styled.div<Props>`
  display: none;
  position: fixed;
  bottom: 25px;
  right: 25px;

  background-color: #ffffffed;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  z-index: 10;
  width: 40px;
  height: 40px;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      display: grid;
    `};

  place-items: center;
  &:hover {
    scale: 0.8;
    background-color: #ccc;
    transition: 0.3s ease;
    box-shadow: 10px 10px 20px #777575, -10px -10px 10px #ffffffed;
    > a {
      font-size: 2rem;
      transition: 0.3s ease;
    }
  }

  a {
    transform: rotate(-44deg);
  }
`;

export const Hidden: React.FC = () => {
  const [showDiv, setShowDiv] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 700) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HiddenDiv $isVisible={showDiv}>
      <a href="#top">🚀</a>
    </HiddenDiv>
  );
};
