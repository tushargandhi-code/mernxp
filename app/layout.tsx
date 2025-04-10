import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mernxp.vercel.app/"),
  title: { default: "Us News Insider", template: `%s | Us News Insider` },
  description: "Stay updated with the latest tech and global news.",
  openGraph: {
    url: "/",
    title: "Us News Insider",
    description: "",
    images: ["/logo."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Us News Insider",
    description: "",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png", 
  },
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
