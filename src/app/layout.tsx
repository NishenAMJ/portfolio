import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PortfolioProvider } from "@/context/portfolio-provider";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Janith Nishen",
  description:
    "Information Technology undergraduate at the University of Moratuwa. Explore my work in full-stack development, mobile applications, and connected systems.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <PortfolioProvider>
          <Header />
          {children}
          <Footer />
        </PortfolioProvider>
      </body>
    </html>
  );
}
