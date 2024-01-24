import { ExtendedRecordMap } from 'notion-types'
import { getPageCover } from '@/utils/Notion'

export default function useNotionPage(recordMap: ExtendedRecordMap) {
  const blockEntries = Object.entries(recordMap.block)
  const pageWithCover = blockEntries.find(
    ([, block]) => block.value.format?.page_cover
  )

  if (!pageWithCover) {
    return { thumbnailSrc: './defaultThumbnail.png' }
  }

  const [, { value: blockValue }] = pageWithCover
  const { format, id } = blockValue
  const pageCoverUrl = format?.page_cover

  const thumbnailSrc = getPageCover({ id, url: pageCoverUrl })

  return { thumbnailSrc }
}
