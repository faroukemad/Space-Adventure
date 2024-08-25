import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/main/StarBackground";
import Navbar from "./components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Adventure",
  description: "Dive into the vastness of the universe with this portfolio dedicated to space exploration. From the mysteries of distant galaxies to the marvels of our solar system, this collection showcases the beauty and intrigue of space, combining stunning visuals with insightful content.",
  icons:['/favicon.ico']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        
        <StarsCanvas/>
        <Navbar/>
        {children}

      </body>
    </html>
  );
}
