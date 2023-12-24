import type { Metadata } from 'next'
import { Figtree } from 'next/font/google' // Change font
import './globals.css'
import Sidebar from '@/Components/Sidebar'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music Site', // Site name
  description: 'Listen and talk about music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
        </body>
    </html>
  )
}
