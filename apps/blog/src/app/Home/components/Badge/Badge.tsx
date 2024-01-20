import { PropsWithChildren } from 'react'
import styles from './Badge.module.scss'

interface Props {
  content: string
}

const Badge = ({ content }: Props) => {
  return <div className={styles.badge}>{`# ${content}`}</div>
}

const BadgeContainer = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>
}

Badge.Container = BadgeContainer

export default Badge
