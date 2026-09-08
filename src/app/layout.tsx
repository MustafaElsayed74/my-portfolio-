import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mustafaelsayed.dev'),
  title: 'Mustafa Elsayed | Junior Backend .NET Developer',
  description: 'Portfolio of Mustafa Elsayed Mustafa — Junior Backend .NET Developer specializing in ASP.NET Core, EF Core, Clean Architecture, and RESTful Web APIs. Seeking Junior & Internship roles in Cairo and remote.',
  keywords: ['Mustafa Elsayed', 'Junior Backend Developer', '.NET Developer', 'ASP.NET Core', 'C#', 'DEPI', 'Zagazig University', 'Cairo'],
  authors: [{ name: 'Mustafa Elsayed Mustafa' }],
  icons: {
    icon: '/avatar.jpg',
    apple: '/avatar.jpg',
  },
  openGraph: {
    title: 'Mustafa Elsayed | Junior Backend .NET Developer',
    description: 'Disciplined, architecture-minded Junior .NET developer ready to deliver production-grade APIs from Day 1.',
    url: 'https://github.com/MustafaElsayed74',
    siteName: 'Mustafa Elsayed Portfolio',
    images: [
      {
        url: '/avatar.jpg',
        width: 800,
        height: 800,
        alt: 'Mustafa Elsayed - Junior Backend .NET Developer',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light-theme">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Technical Blueprint Grid Layer */}
        <div className="blueprint-grid" aria-hidden="true" />
        {/* Ambient Top Glow */}
        <div className="ambient-glow" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
