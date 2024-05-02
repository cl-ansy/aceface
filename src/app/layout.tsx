import { type Metadata, type Viewport } from "next";
import { Inter } from "next/font/google";

import AtomStoreProvider from "@/state/AtomStoreProvider";
import Navbar from "@/components/Navbar";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AceFace",
  description: "Browser based multiplayer casino games!",
};

export const viewport: Viewport = {
  width: "device-width",
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg color-main">
      <body className={inter.className}>
        {/*
          Do not remove this Provider. It is important to store jotai state here instead of an
          implicit global store ("provider-less" mode) so that NextJS won't share state across requests.
        */}
        <AtomStoreProvider>
          <Navbar />
          <main className="h-screen">{children}</main>
        </AtomStoreProvider>
      </body>
    </html>
  );
}
