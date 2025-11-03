import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css'
import Footer from "@/components/footer";
import Header from "@/components/shared/header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="flex-1 h-screen flex flex-col">
      <Header/>
      <main className="flex-1 wrapper">{children}</main>
      <Footer/>
    </div>
    </>
  );
}
