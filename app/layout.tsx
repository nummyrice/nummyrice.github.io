import type { Metadata } from 'next'
import { HeroUIProvider } from "@heroui/react";
import './globals.css';
import 'tailwindcss/tailwind.css'


export const metadata: Metadata = {
  title: 'Nicholas Rice',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HeroUIProvider>
          <header>
            <h1>My Site</h1>
          </header>
          <main className="flex flex-col items-center justify-center h-screen overflow-y-auto">{children}</main>
        </HeroUIProvider>
      </body>
    </html>
  )
}
