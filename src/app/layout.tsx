import type { Metadata } from "next";
import "./globals.css";

// Remove or comment out the ErrorBoundary import for now
// import ErrorBoundary from '../components/ErrorBoundary';

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
        className={`bg-slate-100 antialiased font-walsheim`}
      >
        {/* Remove ErrorBoundary component for now */}
        {children}
      </body>
    </html>
  );
}
