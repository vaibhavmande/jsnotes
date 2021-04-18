import { Post } from '../Post/Post'
import styles from './Posts.module.scss'

export const Posts = ({ posts }) => {
  return (
    <div className={styles.list}>
      {posts?.map((post, index) => {
        const { frontmatter, slug } = post
        return (
          <Post
            key={index}
            slug={slug}
            title={frontmatter.title}
            intro={frontmatter.intro}
          />
        )
      })}
    </div>
  )
}
