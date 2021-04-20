import styles from './PostContents.module.scss'
import ReactMarkdown from 'react-markdown'

export const PostContents = ({ content }) => {
  return (
    <div className={styles.container}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
