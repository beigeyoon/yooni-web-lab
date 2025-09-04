import { Providers } from './providers';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Web Fundamentals Lab',
  description: 'Rendering / State / Browser / Bundling / Network 실험실',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
