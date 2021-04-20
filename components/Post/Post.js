import styles from './Post.module.scss'
import Link from 'next/link'

export const Post = ({ title, intro, slug }) => {
  return (
    <>
      <div className={styles.listItem}>
        <h2 className={styles.title}>
          <Link href={`/posts/${slug}`}>
            <a>
              {title} <span className={styles.arrow}>→</span>
            </a>
          </Link>
        </h2>
        <p className={styles.intro}>{intro}</p>
      </div>
    </>
  )
}
