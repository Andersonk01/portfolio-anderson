import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const HiddenDiv = styled.div<{ $isVisible: boolean }>`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
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
      display: block;
    `};

  &:hover {
    scale: 0.8;
    background-color: #ccc;
    transition: 0.3s ease;
    > a {
      transform: translate(20%, -65%);
      font-size: 2rem;
      transition: 0.3s ease;
      box-shadow: 10px 10px 20px #777575, -10px -10px 10px #ffffffed;
    }
  }

  a {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;
    mix-blend-mode: difference;
    background-color: transparent;
    color: #ffffffed;
    width: 90%;
    height: 90%;
    font-size: 1.6rem;
    border-radius: 12px;
    border: 2px solid #777575;
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
      <a href="#top">↑</a>
    </HiddenDiv>
  );
};
