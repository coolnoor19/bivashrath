import type { Metadata } from "next";
import { Outfit, Rethink_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// additional font imported from Google Fonts
const rethink = Rethink_Sans({
  variable: "--font-rethink",
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
        className={`${outfit.variable} ${rethink.variable} antialiased bg-black text-white selection:bg-amber-500/30 font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

