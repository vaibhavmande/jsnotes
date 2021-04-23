import { Post } from '../Post/Post'
import styles from './Posts.module.scss'

export const Posts = ({ posts }) => {
  return (
    <div className={styles.list}>
      {posts?.map((post, index) => {
        return (
          <Post
            key={index}
            title={post.title}
            intro={post.intro}
            slug={post.slug}
          />
        )
      })}
    </div>
  )
}
