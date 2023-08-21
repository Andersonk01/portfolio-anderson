import { Wrapper } from "./styled";
import Image from "next/image";
import "../../../public/logo.png";
import Link from "next/link";

export const Profile = () => {
  return (
    <Wrapper id="top">
      <div>
        <h1>Hey, eu sou Anderson</h1>
        <h2>Desenvolvedor Front End</h2>
        <Link href="projects">✨Projetos✨</Link>
      </div>
      <span>
        <Image src="/back-profile.svg" alt="logo" width={400} height={400} />
      </span>
      <section>tecnologias</section>
    </Wrapper>
  );
};
