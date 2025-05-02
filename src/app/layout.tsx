import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const shareTechMono = Share_Tech_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turing Tools - Intelligent Digital Solutions",
  description: "Crafting Exceptional Web and Mobile Applications",
  openGraph: {
    title: "Turing Tools - Intelligent Digital Solutions",
    description: "Crafting Exceptional Web and Mobile Applications",
    url: "https://turingtools.com",
    siteName: "Turing Tools",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Turing Tools Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turing Tools - Intelligent Digital Solutions",
    description: "Crafting Exceptional Web and Mobile Applications",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={shareTechMono.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
