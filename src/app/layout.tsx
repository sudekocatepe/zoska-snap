
// ./app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import Navbar from '@/components/Navbar';  // Import the Navbar component
import React from 'react';


export const metadata: Metadata = {
  title: "Moja app",
  description: "Made by Sude",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
          <Navbar /> {/* Moved Navbar outside of the main container */}
        </AuthProvider>
      </body>
    </html>
  );
}





