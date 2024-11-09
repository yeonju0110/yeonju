'use client'

import Link from 'next/link'
import Image from '@/components/Image/Image'
import links from '@/constants/links'
import IconLink from '../Icon/IconLink'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <Link className={styles.logo} href={links.homePage}>
          <Image
            type="local"
            src="/logo.png"
            alt="logo"
            width={20}
            height={20}
          />
          <p className={styles.subTitle}>{`Yeonble Tech Blog`}</p>
        </Link>

        <div className={styles.links}>
          <IconLink name="IconGithub" href={links.github} />
          <IconLink name="IconMail" href={links.mail} />
        </div>
      </div>
    </header>
  )
}

export default Header
