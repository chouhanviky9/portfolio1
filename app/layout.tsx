import type { Metadata } from "next";
// import localFont from "next/font/local"; // If you used local fonts
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Vikash Kumar | Full-Stack Developer",
  description: "Full-Stack Developer specializing in MERN stack, TypeScript, and Python.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
