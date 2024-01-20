import { ExtendedRecordMap } from 'notion-types'
import { fetchDatabase, fetchPageData } from '@/apis/notion'
import NotionPage from '@/app/[slug]/NotionPage/NotionPage'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const recordMap: ExtendedRecordMap = await fetchPageData(params.slug)

  return (
    <main>
      <NotionPage recordMap={recordMap} currentPageId={params.slug} />
    </main>
  )
}

export async function generateStaticParams() {
  const eventIds = await fetchDatabase()

  return (eventIds || []).map(event => ({
    slug: event.id,
  }))
}
