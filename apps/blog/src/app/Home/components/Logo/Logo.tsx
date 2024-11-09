import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <h1 className={styles.title}>Yeonble</h1>
        <h5>{`연두의 파란만장 개발 블로그! 꾸준한 노력만이 탁월한 뇌를 만든다.`}</h5>
        <br />
        <br />
        <h3>{`- ̗̀ෆ⎛˶'ᵕ'˶ ⎞ෆ ̖́-`}</h3>
      </div>
    </section>
  )
}

export default Logo
