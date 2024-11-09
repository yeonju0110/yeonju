import { Client } from '@notionhq/client'
import notion from '@/libs/notion'

type Tag = {
  id: string
  name: string
}

export type Card = {
  id: string
  title: string
  created_time: string
  thumbnail_image: string
  tags: Tag[]
}

export const fetchDatabase = async () => {
  try {
    const notionAPI = new Client({
      auth: process.env.NOTION_KEY,
    })

    const dbQueryData = await notionAPI.databases.query({
      database_id: '8387b19f768047f6a6777d96924914a9',
    })

    const extractInfo: Card[] = dbQueryData.results
      .map(item => {
        if (
          'properties' in item &&
          'created_time' in item &&
          'title' in item.properties.Name &&
          item.properties.Name.title &&
          Array.isArray(item.properties.Name.title) &&
          item.properties.Name.title.length > 0 &&
          'plain_text' in item.properties.Name.title[0] &&
          item.properties.Name.title[0].plain_text &&
          'multi_select' in item.properties.Tags &&
          Array.isArray(item.properties.Tags.multi_select) &&
          'date' in item.properties.Date &&
          item.properties.Date.date
        ) {
          let thumbnailImage = './defaultThumbnail.png'
          if ('cover' in item && item.cover) {
            if ('file' in item.cover && 'url' in item.cover.file) {
              thumbnailImage = item.cover.file.url
            } else if ('external' in item.cover) {
              thumbnailImage = item.cover.external.url
            }
          }

          const tags: Tag[] = item.properties.Tags.multi_select.map(tag => {
            return { id: tag.id, name: tag.name }
          })

          return {
            id: item.id,
            title: item.properties.Name.title[0].plain_text,
            created_time: item.properties.Date.date.start,
            thumbnail_image: thumbnailImage,
            tags,
          }
        } else {
          return null
        }
      })
      .filter((item): item is Card => item !== null)

    return extractInfo
  } catch (e) {
    console.warn(e)
  }
}

export const fetchPageData = async (pageId: string) => {
  try {
    const recordMap = await notion.getPage(pageId)
    return recordMap
  } catch (e) {
    console.warn(e)
    throw e
  }
}
