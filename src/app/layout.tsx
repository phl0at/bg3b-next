import type { Metadata } from "next";
import Header from "@/app/header";
import Footer from "@/app/footer";
import { MenuProvider } from "@/context/menu";
import "./globals.css";

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
        className={`antialiased bg-zinc-900 flex flex-col justify-between h-screen`}
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
