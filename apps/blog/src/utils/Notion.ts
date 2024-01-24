export const getPageCover = ({ id, url }: { id: string; url: string }) => {
  const baseUrl = `https://www.notion.so/image/`
  const encodedPageCoverUrl = encodeURIComponent(url)
  const queryParams = `?table=block&id=${id}&cache=v2`

  return baseUrl + encodedPageCoverUrl + queryParams
}
