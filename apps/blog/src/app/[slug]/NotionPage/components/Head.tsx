import styles from './Head.module.scss'

interface Props {
  title: string
  thumbnailSrc: string | null
}

const Head = ({ title }: Props) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </section>
  )
}

export default Head
