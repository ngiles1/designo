import type { Metadata } from "next";
import "./globals.css";
import AppHeader from "@/app/_components/app-header";
import AppFooter from "@/app/_components/app-footer";
import PageTransition from "@/app/_components/page-transition";

export const metadata: Metadata = {
  title: "Designo",
  description: "Designo multi-page website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="flex flex-col justify-between min-h-screen">
        <div className="container sm:px-2 mx-auto">
          <AppHeader />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
