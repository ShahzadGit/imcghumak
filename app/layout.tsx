import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/home/NavbarHome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMCG, Humak",
  description: "Islamabad Model College for Girls, Humak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ToastContainer position="bottom-right" theme="dark" />
      </body>
    </html>
    // </ClerkProvider>
  );
}
