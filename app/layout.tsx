import "/app/globals.css"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
          <main className="flex-auto">{children}</main>
      </body>
    </html>
  )
}
