import type { Metadata } from "next";
import { Audiowide, Geist_Mono, Golos_Text } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar.tsx/Navbar";
import Footer from "./Components/Footer/Footer";
import ThemeProvider from "./Components/ThemeProvider";
import SidebarProvider from "./Components/SidebarProvider";
import Sidebar from "./Components/Sidebar/Sidebar";

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const golosText = Golos_Text({
  weight: "400",
  variable: "--font-golos-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UIlabs",
  description: "UIlabs Social Network & Comunnity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${audiowide.variable} ${golosText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <SidebarProvider>
            <Navbar />
            <Sidebar />
            {children}
          </SidebarProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}