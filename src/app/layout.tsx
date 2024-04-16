import type { Metadata } from 'next'
import './globals.css'
 
export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
}

function TopNav() {
    return (
        <nav className="flex">
            <ul>
                <li>
                    <a href="/">Homse</a>
                </li>
                <li>
                <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
