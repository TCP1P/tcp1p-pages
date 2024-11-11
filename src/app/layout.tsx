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
  description: 'TCP1P is Indonesian CTF community dedicated to organizing engaging Capture The Flag events and collaborating with local competitions. Our mission is to elevate the quality of CTF challenges in Indonesia and foster a thriving cybersecurity ecosystem through knowledge sharing.',
  authors: [{
    name: 'Dimas Maulana',
    url: 'https://github.com/dimasma0305'
  }],
  creator: 'Dimas Maulana',
  icons: "https://tcp1p.team/favicon.ico",
  openGraph: {
    images: "https://tcp1p.team/favicon.ico"
  },
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
      <body className={`${plusJakartaSans.className} bg-black min-h-screen flex flex-col text-white`}>
        <BackgroundEffects />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
