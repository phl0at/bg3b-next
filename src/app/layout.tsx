import type { Metadata } from "next";
import Header from "@/app/header";

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
      <body className={`antialiased bg-zinc-900 flex flex-col justify-between`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
