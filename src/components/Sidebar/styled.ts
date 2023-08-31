import styled, { css } from "styled-components";

type ContainerAboutProps = {
  $isVisible: boolean;
};

export const SideContainer = styled.aside<ContainerAboutProps>`
  display: flex;

  div {
    display: none;
    width: 300px;
    height: 450px;

    position: fixed;
    left: 6%;
    top: 50%;
    transform: translateY(-50%);

    padding: 20px;

    background: #ffffff90;
    box-shadow: 10px 10px 10px #8f8f8f, -10px -10px 10px #ffffff;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: all 1s ease;

    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
    section {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      a {
        &:hover {
          scale: 1.5;
        }
      }
    }
  }

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      @media (min-width: 900px) {
        div {
          display: flex;
        }
      }
      left: 0px;
    `};
`;
