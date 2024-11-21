import { ContentData } from '@gocontento/client'

export default function AnnouncementBar({ block }: { block: ContentData }) {
  return (
    <div className="banner">
      <div
        dangerouslySetInnerHTML={{ __html: block.fields.announcement.text }}
        className="banner-text"
      />
    </div>
  )
}
