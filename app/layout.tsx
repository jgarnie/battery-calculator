import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { VehicleSelectionContextWrapper } from './contexts/VehicleSelectionContext';
import { SetupContextWrapper } from './contexts/SeupContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Battery calculator',
  description: 'Battery calculator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SetupContextWrapper>
          <VehicleSelectionContextWrapper>{children}</VehicleSelectionContextWrapper>
        </SetupContextWrapper>
      </body>
    </html>
  );
}
