import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

export const metadata: Metadata = {
  metadataBase: new URL('https://shrivitthalagri.edu.in'),
  title: {
    default: 'Shri Vitthal College of Agriculture | Premium Agricultural Education',
    template: '%s | Shri Vitthal College of Agriculture',
  },
  description: 'Shri Vitthal College of Agriculture offers career-focused agricultural education with modern labs, field learning, leadership mentoring, and admissions guidance.',
  keywords: ['Shri Vitthal College of Agriculture', 'agriculture college', 'BSc Agriculture', 'agricultural education', 'Maharashtra agriculture college'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Shri Vitthal College of Agriculture',
    description: 'Modern agricultural education with practical farm learning, labs, hostel support, and leadership mentoring.',
    url: '/',
    siteName: 'Shri Vitthal College of Agriculture',
    images: [{ url: '/hero-poster.jpg', width: 1200, height: 1600, alt: 'Shri Vitthal College of Agriculture admission poster' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Vitthal College of Agriculture',
    description: 'Premium university-style agricultural education for future-ready farm leaders.',
    images: ['/hero-poster.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1b5e20',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      style={
        {
          '--font-display': '"Aptos Display", "Segoe UI", system-ui, sans-serif',
          '--font-sans': '"Aptos", "Segoe UI", system-ui, sans-serif',
        } as React.CSSProperties
      }
    >
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
