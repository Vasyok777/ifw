import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const actay = localFont({
  src: "../fonts/Actay-Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-actay",
  display: "swap",
});

const actayWide = localFont({
  src: "../fonts/ActayWide-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-actay-wide",
  display: "swap",
});

const gillSans = localFont({
  src: "../fonts/Gill-Sans-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-gill-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IFW - Invest Freedom Win",
  description:
    "Інвестиційна платформа IFW. Інвестуй від 2000 грн у важливі проекти та отримуй пасивний дохід.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${actay.variable} ${actayWide.variable} ${gillSans.variable} font-sans antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}