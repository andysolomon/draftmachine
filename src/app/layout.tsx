import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { TopNav } from './_components/topnav'
 
export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <html lang="en">
          <body>
            <TopNav />
            <div id="root">{children}</div>
          </body>
        </html>
    </ClerkProvider>
  )
}
