import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; //@ means that you are accessing from the global directory the files that you need

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: Readonly<{ // tells that children that is recieved is read only and cannot be altered
  children: React.ReactNode; // this specifically specifies the type that the children will have which is a react component 
}>) {
  return (
    <html lang="en" className="dark">
      
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
        <Navbar/> {/* now this Navbar will be displayed on every route of the localHost */}
        </div>
        {children}
        </body>
    </html>
  );
}
