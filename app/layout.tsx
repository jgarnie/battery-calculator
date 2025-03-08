import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { VehicleDataContextWrapper } from './contexts/VehicleDataContext';
import { VehicleSelectionContextWrapper } from './contexts/VehicleSelectionContext';
import { AppConfigurationContextWrapper } from './contexts/AppConfigurationContext';

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppConfigurationContextWrapper>
          <VehicleDataContextWrapper>
            <VehicleSelectionContextWrapper>
              {children}
            </VehicleSelectionContextWrapper>
          </VehicleDataContextWrapper>
        </AppConfigurationContextWrapper>
      </body>
    </html>
  );
}
