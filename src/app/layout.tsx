import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { Provider } from "@/components/ui/Providers";
import { Toaster } from "@/components/ui/toaster"
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindGen-AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Provider>
          <Navbar />
          
          {children}
          <Toaster/>
        </Provider>
      </body>
    </html>
  );
}
