import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React, { Suspense } from 'react'
import Loading from './loading'
import { TopNavbar } from './_components/navbar'
import { TopFooter } from './_components/footer'
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { LogoHeader } from './_components/logo-header'
import { NavbarBelow } from './_components/navbar-below'
import logo from "../../public/TCP1P-logo.png"
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TCP1P',
  description: 'TCP1P is an Indonesian CTF team actively engaging in competitive cybersecurity events on ctftime.',
  authors: {
    name: 'Dimas Maulana',
    url:'https://github.com/dimasma0305'
  },
  creator:'Dimas Maulana',
  icons: "/TCP1P-logo.png",
  openGraph: {
    images: "/TCP1P-logo.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="night">
      <body className={inter.className}>
        <TopNavbar />
        <LogoHeader />
        <NavbarBelow />
        <div className="divider"></div>
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
        <footer className='mt-10'>
          <TopFooter />
        </footer>
      </body>
    </html>
  )
}
