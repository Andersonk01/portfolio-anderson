import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { HeaderMain } from "@/components/HeaderMain";
import { FollowCursor } from "@/components/MouseMove";
import { Footer } from "@/components/Footer";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anderson Kauer",
  description: "Desenvolvedor Front-end",
  icons: "logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <HeaderMain />
          <FollowCursor />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
