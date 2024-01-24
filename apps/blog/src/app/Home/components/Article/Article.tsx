import dayjs from 'dayjs'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Card } from '@/apis/notion'
import Image from '@/components/Image/Image'
import size from '@/constants/size'
import { isLocal } from '@/libs/config'
import { getPageCover } from '@/utils/Notion'
import Badge from '../Badge/Badge'
import styles from './Article.module.scss'

interface ArticleProps {
  article: Card
}

const Article = ({ article }: ArticleProps) => {
  const {
    id,
    title,
    created_time: createdTime,
    thumbnail_image: thumbnailImage,
    tags,
  } = article

  const getPageLink = (id: string) => {
    if (isLocal) {
      return `/${id}`
    }
    return `/yeonju/${id}`
  }

  return (
    <Link
      key={id}
      href={getPageLink(id)}
      className={styles.article}
      style={{ width: `${size.article_width}px` }}
    >
      <Image
        className={styles.thumbnail}
        type="remote"
        alt="thumbnail_image"
        src={getPageCover({ id, url: thumbnailImage })}
        width={size.article_width}
        height={size.article_height}
      />

      <p className={styles.title}>{title}</p>
      <p className={styles.date}>{dayjs(createdTime).format('YYYY-MM-DD')}</p>

      <Badge.Container>
        {tags.map(tag => (
          <Badge key={tag.id} content={tag.name} />
        ))}
      </Badge.Container>
    </Link>
  )
}

const ArticleContainer = ({ children }: PropsWithChildren) => {
  return <section className={styles.container}>{children}</section>
}

Article.Container = ArticleContainer

export default Article
