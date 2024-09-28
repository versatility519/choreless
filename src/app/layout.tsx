import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Remove or comment out the ErrorBoundary import for now
// import ErrorBoundary from '../components/ErrorBoundary';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Choreless",
  description: "Choreless is a chore management app that helps you manage your household chores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-100 antialiased`}
      >
        {/* Remove ErrorBoundary component for now */}
        {children}
      </body>
    </html>
  );
}
