import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bivash Rath | Entrepreneur, Quiz Master, Musician & Educator",
  description: "Portfolio of Bivash Rath",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-black text-white selection:bg-amber-500/30 font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

