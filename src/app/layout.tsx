import type { Metadata } from "next";
import { Josefin_Sans, Montserrat, Orelega_One } from "next/font/google";
import "./globals.css";

// Font Options:
// 1. Libre_Baskerville + Source Sans Pro
// 2. Yeseva_One + Josefin Sans
// 3. Orelega_One + Montserrat

const body = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-family-body",
  display: "swap",
});

const heading = Orelega_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-heading",
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
        <div className="flex h-dvh w-dvw items-center justify-center absolute top-0 left-0 z-0">
          <div className="h-dvh w-dvw bg-white relative overflow-hidden">
            <div className="child one"></div>
            <div className="child two"></div>
            <div className="child three"></div>
            <div className="child four"></div>
          </div>
          <div className="absolute left-0 top-0 h-dvh w-dvw bg-gradient-to-b from-transparent via-white/10 to-[#eee7de] z-[2]"></div>
        </div>

        {children}
      </body>
    </html>
  );
}
