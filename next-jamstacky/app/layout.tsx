import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Header_banner from "@/components/Header_banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "#1 White Label Jamstack Development Agency USA | Hire Jamstack Developer",
  description: "Create With Next App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header_banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
