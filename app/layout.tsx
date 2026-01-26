import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "@/ui/styles/base.sass";

import MainHeader from "@/ui/MainHeader";
import ProgressBar from "@/ui/ProgressBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "appw",
  description: "appw — платформа, где вы можете скачивать, покупать игры и приложения, создавать коллекции и многое другое!",
  icons: {
    icon: '/favicon/appw.ico',
    apple: '/favicon/appw-apple-touch.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${ebGaramond.variable}`}
      >
        <ProgressBar />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
