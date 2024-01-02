import type { Metadata } from 'next'
import { Figtree } from 'next/font/google' // Change font
import './globals.css'

import Sidebar from '@/Components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModelProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserID from '@/actions/getSongsByUserID'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music Site', // Site name
  description: 'Listen and talk about music!',
}

export const revalidate = 0; // Dont want player to be cached

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserID();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>
              {children}  
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
