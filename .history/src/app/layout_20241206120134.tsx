// layout.tsx (without "use client" directive for metadata export)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/client-layout"; // Import client-side layout

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SM Collections",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout> {/*Client-side layout*/}
      </body>
    </html>
  );
}