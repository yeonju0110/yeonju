'use client'

import Link from 'next/link'
import Image from '@/components/Image/Image'
import links from '@/constants/links'
import IconLink from '../Icon/IconLink'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <Link className={styles.logo} href={links.homePage}>
        <Image type="local" src="/logo.png" alt="logo" width={10} height={10} />
        <p className={styles.subTitle}>{`Yeonju Tech Blog`}</p>
      </Link>

      <div className={styles.links}>
        <IconLink name="IconGithub" href={links.github} />
        <IconLink name="IconMail" href={links.mail} />
      </div>
    </header>
  )
}

export default Header
