import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import React from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import BackgroundEffects from './_components/background-effects';

config.autoAddCss = false;

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TCP1P',
  description: 'TCP1P is an Indonesian Capture The Flag community sharing challenges, events, and open source resources.',
  authors: [{
    name: 'Dimas Maulana',
    url: 'https://github.com/dimasma0305'
  }],
  creator: 'Dimas Maulana',
  icons: "/favicon.ico",
  other: {
    "volunteer": "https://github.com/bri-anadi"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="night">
      <body className={`${plusJakartaSans.className} min-h-screen flex flex-col`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <BackgroundEffects />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
