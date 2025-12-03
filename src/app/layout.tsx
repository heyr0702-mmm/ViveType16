import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAdsense } from "@/components/GoogleAdsense";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "16コミュニケーションタイプ診断",
  description: "あなたの『会話スタイル』には、名前がある。性格の良し悪しではなく、無意識に使っている「会話の型」を可視化する成分分析。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAdsense pId="8802783650388237" />
        <GoogleAnalytics gaId="G-JKEGM9WS1B" />
        {children}
      </body>
    </html>
  );
}
