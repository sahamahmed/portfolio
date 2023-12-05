import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const  montserrat =  Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saham Ahmed | Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
    
<link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className={ montserrat.className}>{children}</body>
    </html>
  )
}
