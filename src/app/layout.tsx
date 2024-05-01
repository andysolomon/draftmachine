import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { TopNav } from './_components/topnav'
import { SideNav } from './_components/sidenav'
 
export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
}
 
export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
        <html lang="en">
          <body>
            <div className="flex">
                <div>
                    <SideNav />
                </div>
                <div className="grow">
                    <TopNav />
                    <div id="root">{children}</div>
                </div>
            </div>
          </body>
        </html>
    </ClerkProvider>
  )
}
