import type { Metadata, Viewport } from 'next';
import { Merriweather, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Merriweather({ subsets: ['latin'], weight: ['700', '900'], variable: '--font-display', display: 'swap' });

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
    images: [{ url: '/admission-poster.svg', width: 1200, height: 900, alt: 'Shri Vitthal College of Agriculture admission poster' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Vitthal College of Agriculture',
    description: 'Premium university-style agricultural education for future-ready farm leaders.',
    images: ['/admission-poster.svg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1f7a4c',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${display.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
