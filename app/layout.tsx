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
  title: { default: "US News Insider", template: `%s | US News Insider` },
  description: "Stay updated with the latest tech and global news.",
  openGraph: {
    url: "/",
    title: "US News Insider",
    description: "",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "US News Insider",
    description: "",
    images: ["/articles/logo.png"],
  },
  icons: {
    icon: "/articles/logo.png", 
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
