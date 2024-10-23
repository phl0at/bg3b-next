import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/app/header";
import Footer from "@/app/footer";
import { MenuProvider } from "@/context/menu";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BG3Builds",
  description: "Build your dreams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 flex flex-col justify-between h-screen`}
      >
        <MenuProvider>
          <Header />
          {children}
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
