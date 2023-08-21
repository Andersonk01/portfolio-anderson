import Link from "next/link";
import { HeaderContainer, Nav } from "./styled";

export const HeaderMain = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Nav>
        <Link href="#about">About Me</Link>

        <Link href="projects">Projects</Link>

        <Link href="#skills">Skills</Link>

        <Link href="#contact">Contact</Link>
      </Nav>
    </HeaderContainer>
  );
};
