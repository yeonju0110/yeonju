'use client'

import Link from 'next/link'
import colors from '@/constants/colors'
import links from '@/constants/links'
import Icon from '../Icon/Icon'
import IconLink from '../Icon/IconLink'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <Link className={styles.logo} href={links.homePage}>
        <Icon name="IconCat" size={40} fill={colors.purple} />
        <p className={styles.subTitle}>연주의 기술블로그</p>
      </Link>

      <div className={styles.links}>
        <IconLink name="IconGithub" href={links.github} />
        <IconLink name="IconMail" href={links.mail} />
      </div>
    </header>
  )
}

export default Header
