import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "andrewsel.com",
  description:
    "Experienced full-stack web & app developer with a background in startups and marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
