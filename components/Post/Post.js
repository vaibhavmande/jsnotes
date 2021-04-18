import styles from './Post.module.scss'

export const Post = ({ title, intro }) => {
  return (
    <div className={styles.listItem}>
      <h2 className={styles.title}>{title} →</h2>
      <p className={styles.intro}>{intro}</p>
    </div>
  )
}
