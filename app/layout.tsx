import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "@/ui/styles/base.sass";
import MainHeader from "@/ui/mainHeader";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${ebGaramond.variable} antialiased`}
      >
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
