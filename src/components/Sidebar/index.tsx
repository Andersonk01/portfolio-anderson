"use client";
import { useEffect, useState } from "react";
import { SideContainer } from "./styled";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = (): JSX.Element => {
  const [showDiv, setShowDiv] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 470) {
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
    <SideContainer $isVisible={showDiv}>
      <div>
        <Image src="/back-profile.svg" alt="logo" width={200} height={200} />
        <h1>Anderson Kauer</h1>
        <h2>Desenvolvedor | UX Design</h2>
        <p>Redes Sociais</p>
        <span>
          {/* github */}
          <Link href="https://github.com/andersonk01" target="_blank">
            <Image src="/assets/github.svg" alt="logo" width={20} height={20} />
          </Link>
          {/* linkedin */}
          <Link
            href="https://www.linkedin.com/in/anderson-kauer"
            target="_blank"
          >
            <Image
              src="/assets/linkedin.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </Link>
          {/* instagram */}
          <Link href="https://www.instagram.com/kauercode/" target="_blank">
            <Image
              src="/assets/instagram.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </Link>
        </span>
      </div>
    </SideContainer>
  );
};
