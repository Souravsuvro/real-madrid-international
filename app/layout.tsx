import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Madrid International | Govt. Approved Recruiting Agency RL-2113",
  description: "Real Madrid International - Bangladesh Government Approved Recruiting & Travel Agency (License RL-2113). Trusted services in Dhaka.",
  keywords: ["recruiting agency", "travel agency", "Real Madrid International", "Dhaka", "Bangladesh", "RL-2113"],
  authors: [{ name: "Md. Omar Faruq" }],
  openGraph: {
    title: "Real Madrid International",
    description: "Govt. Approved Recruiting & Travel Agency",
    images: [{ url: "/business-card.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">{children}</body>
    </html>
  );
}
