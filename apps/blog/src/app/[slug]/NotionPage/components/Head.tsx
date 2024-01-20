import Image from '@/components/Image/Image'
import size from '@/constants/size'
import styles from './Head.module.scss'

interface Props {
  title: string
  thumbnailSrc: string | null
}

const Head = ({ title, thumbnailSrc }: Props) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <Image
        //   TODO test
        className={styles.thumbnail}
        type={thumbnailSrc === null ? 'local' : 'remote'}
        src={thumbnailSrc ?? '/defaultThumbnail.png'}
        alt="thumbnail"
        width={size.thumbnail.width}
        height={size.thumbnail.height}
      />
    </section>
  )
}

export default Head
