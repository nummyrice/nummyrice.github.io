import Head from "next/head"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Nicholas Rice</title>
      </Head>
    <body>
      <header>
        <h1>My Site</h1>
      </header>
      <main className="flex flex-col items-center justify-center h-screen overflow-y-auto">{children}</main>
    </body>
    </html>
  )
}
