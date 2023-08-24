import { Wrapper, SectionTechs } from "./styled";
import Image from "next/image";
import "../../../public/logo.png";
import Link from "next/link";

export const Profile = () => {
  return (
    <Wrapper id="top">
      <div>
        <h1 id="top">Hey, eu sou Anderson</h1>
        <h2>Desenvolvedor Front End</h2>
        <Link href="projects">✨Projetos✨</Link>
      </div>
      <span>
        <Image
          src="/back-profile.svg"
          alt="logo"
          width={400}
          height={400}
          priority={true}
        />
      </span>
      <SectionTechs>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="react"
          width={40}
          height={40}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="typescript"
          width={40}
          height={40}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="javascript"
          width={40}
          height={40}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="html5"
          width={40}
          height={40}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="css3"
          width={40}
          height={40}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          alt="nextjs"
          width={40}
          height={40}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="git"
          width={40}
          height={40}
        />
      </SectionTechs>
    </Wrapper>
  );
};
