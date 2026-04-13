import { RootProvider } from 'fumadocs-ui/provider/next';
import { DM_Mono, Outfit } from 'next/font/google';
import type { ReactNode } from 'react';
import './global.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-zylora-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-zylora-mono',
  display: 'swap',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${dmMono.variable} flex min-h-screen flex-col antialiased`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
