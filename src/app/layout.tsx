import type { Metadata } from "next";
import { Noto_Sans, Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/footer";

const heading = localFont({
  src: [
    {
      path: "../../public/fonts/Acorn-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acorn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acorn-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acorn-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-family-heading",
});

const body = Source_Sans_3({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-family-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrew Oplas — Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body className="overflow-x-hidden">
        {children}
        <Footer />
      </body>
    </html>
  );
}
