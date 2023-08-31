"use client";
import { useEffect, useState } from "react";
import { SideContainer } from "./styled";
import Image from "next/image";
import Link from "next/link";

import blueflame from "../../../public/assets/blueflame.gif";

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
        <Image
          src="/perfil.png"
          alt="logo"
          width={200}
          height={200}
          style={{ borderRadius: "20%" }}
          priority={true}
        />

        <h1>Anderson Kauer</h1>
        <h2>Desenvolvedor | UX Design</h2>
        <p>Redes Sociais</p>
        <section>
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
        </section>
        <Image
          src={blueflame}
          alt="logo"
          width={80}
          height={80}
          style={{
            zIndex: "1",
            position: "absolute",
            bottom: "-5px",
            right: "-20px",
          }}
        />
      </div>
    </SideContainer>
  );
};
