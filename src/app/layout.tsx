import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Correct import for Geist Sans
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';

// Correct way to load Geist Sans
const geistSans = GeistSans; // Assign directly as it's loaded differently

export const metadata: Metadata = {
  title: 'VP Informatics Hub',
  description: 'VP Informatics – Crafting Scalable Software Solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        geistSans.variable, // Apply the font variable
        "antialiased font-sans flex flex-col min-h-screen" // Ensure font-sans is used and set flex layout
      )}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
