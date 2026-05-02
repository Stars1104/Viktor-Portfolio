import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Layson - Portfolio | Crafting Purpose Driven Experiences",
  description: "I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
