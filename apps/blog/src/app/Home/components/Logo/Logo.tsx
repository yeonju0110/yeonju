import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <h1 className={styles.title}>The Yeonju</h1>
        <h5>{`Hello, My Tech World :D`}</h5>
      </div>
    </section>
  )
}

export default Logo
