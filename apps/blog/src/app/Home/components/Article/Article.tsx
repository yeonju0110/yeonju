import dayjs from 'dayjs'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Card } from '@/apis/notion'
import Image from '@/components/Image/Image'
import size from '@/constants/size'
import Badge from '../Badge/Badge'
import styles from './Article.module.scss'

interface ArticleProps {
  article: Card
}

const Article = ({ article }: ArticleProps) => {
  return (
    <Link
      key={article.id}
      href={`/${article.id}`}
      className={styles.article}
      style={{ width: `${size.article_width}px` }}
    >
      <Image
        className={styles.thumbnail}
        type="remote"
        alt="thumbnail_image"
        src={article.thumbnail_image}
        width={size.article_width}
        height={size.article_height}
      />

      <p className={styles.title}>{article.title}</p>
      <p className={styles.date}>
        {dayjs(article.created_time).format('YYYY-MM-DD')}
      </p>

      <Badge.Container>
        {article.tags.map(tag => (
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
