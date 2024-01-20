import Icon from '@/components/Icon/Icon'
import colors from '@/constants/colors'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.leftStar}>
          <Icon name="IconStar" size={38} fill={colors.purple} />
        </div>
        <div className={styles.rightStar}>
          <Icon name="IconStar" size={30} fill={colors.purple} />
        </div>

        <h1 className={styles.title}>
          <span>{`<`}</span>Yeon<span>:</span> Ju <span>{`/>`}</span>
        </h1>
      </div>
    </section>
  )
}

export default Logo
