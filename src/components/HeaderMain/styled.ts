"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  min-height: 40px;
  width: 100%;

  background-color: #fff;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  height: 50px;
  width: 100%;

  a {
    position: relative;
    font-size: 1rem;
    margin: 10px;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 1px;
      bottom: 0;
      right: 0;
      transition: all 0.5s ease-in-out;
      background-color: #48ebcf;
    }
    &:hover {
      scale: 1.2;
      &:after {
        width: 100%;
        right: auto;
        left: 0;
      }
    }
  }
`;
