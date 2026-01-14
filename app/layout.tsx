import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Import fonts
import "./globals.css";
import { Providers } from "./providers";

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Configure Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

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
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
