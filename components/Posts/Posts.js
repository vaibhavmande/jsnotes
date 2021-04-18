import { Post } from '../Post/Post'
import styles from './Posts.module.scss'

export const Posts = ({ posts }) => {
  return (
    <div className={styles.list}>
      {posts.map((post, index) => (
        <Post key={index} title={post.title} intro={post.intro} />
      ))}
    </div>
  )
}
