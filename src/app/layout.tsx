// app/layout.tsx
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://kiu-demo-url.com'),
  title: "KIU Website Demo",
  description:
    "A demonstration website for Kutaisi International University (KIU), built using Next.js, React, and Tailwind CSS. Explore modern university web design concepts.",

  icons: {
    icon: "./kiuLogo.png",
  },

  openGraph: {
    title: "Kutaisi International University (KIU) Demo",
    description:
      "Explore the modern web presence of KIU with this Next.js and Tailwind CSS demo.",
    url: "https://kiu-demo-url.com",
    siteName: "KIU Demo Site",
    images: [
      {
        url: "../public/kiuLogo.png",
        width: 1200,
        height: 630,
        alt: "Kutaisi International University main campus building",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  keywords: [
    "KIU",
    "Kutaisi International University",
    "University Demo",
    "Next.js",
    "Tailwind CSS",
    "React",
  ],
  authors: [
    { name: "Besik Meskhia" },
    { name: "Nikoloz Kvirikashvili" },
    { name: "Nikoloz Modebadze" },
    { name: "Nika Geladze" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="mx-auto">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
