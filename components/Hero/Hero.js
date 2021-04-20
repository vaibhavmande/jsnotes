import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.image}></div>
      <p className={styles.title}>
        Welcome to{' '}
        <a href="https://github.com/vaibhavmande/jsnotes" target="_blank">
          jsnotes
        </a>
      </p>
      <p className={styles.description}>
        I write here about JavaScript and related stuff
      </p>
      <hr className={styles.divider} />
    </div>
  )
}
