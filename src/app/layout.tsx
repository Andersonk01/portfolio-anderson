import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { HeaderMain } from "@/components/HeaderMain";
import { FollowCursor } from "@/components/MouseMove";

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
        <HeaderMain />
        <FollowCursor />

        {children}
      </body>
    </html>
  );
}
