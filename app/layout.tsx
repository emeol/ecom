import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Cake Shop | Great Taste",
  description: "Cake shop storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Providers>
          <div className="flex min-h-screen flex-col">
          <header>
            <NavBar />
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-auto border-t border-black/10 bg-white">
            <Footer />
          </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
