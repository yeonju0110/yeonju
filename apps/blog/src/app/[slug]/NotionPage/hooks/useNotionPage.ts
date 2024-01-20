import { ExtendedRecordMap } from 'notion-types'

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

  const baseUrl = `https://www.notion.so/image/`
  const encodedPageCoverUrl = encodeURIComponent(pageCoverUrl)
  const queryParams = `?table=block&id=${id}&cache=v2`

  const thumbnailSrc = baseUrl + encodedPageCoverUrl + queryParams

  return { thumbnailSrc }
}
