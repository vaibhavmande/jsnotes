import styles from './PostHeader.module.scss'

export const PostHeader = ({ title, intro, date }) => {
  return (
    <div className={styles.postHeader}>
      <p className={styles.title}>{title}</p>
      <p className={styles.intro}>{intro}</p>
      <p className={styles.date}>{date}</p>
    </div>
  )
}
