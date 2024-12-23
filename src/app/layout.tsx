import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/components/common/Header";
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nooro Take-Home Todo App",
  description: "A take-home project for Nooro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="max-w-screen-md px-4 mx-auto">{children}</main>
      </body>
    </html>
  );
}
