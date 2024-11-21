import { createClient } from '@/lib/contento'
import '/app/globals.css'
import AnnouncementBar from './AnnouncementBar'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const announcementBar = await createClient().getContentByType({
    contentType: 'announcement_bar',
  })

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {announcementBar && (
          <AnnouncementBar block={announcementBar.content[0]} />
        )}
        <main className="main">{children}</main>
      </body>
    </html>
  )
}
