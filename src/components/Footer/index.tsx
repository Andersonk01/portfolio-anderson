"use client";
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: inherit;
  padding: 10px;
  text-align: center;
  width: 100%;
  font-size: 0.8rem;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>Anderson Kauer &copy; Todos os direitos reservados. 2023</p>
    </FooterWrapper>
  );
};
