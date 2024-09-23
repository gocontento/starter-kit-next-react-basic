import { createClient } from '@/lib/contento'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'


export default async function page() {
  const content = await createClient(draftMode().isEnabled)
    .getContentBySlug('home', 'general_page')
    .catch(() => {
      notFound()
    })

  return <div>{content.fields.title.text}</div>
}
