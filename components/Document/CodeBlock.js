import React from 'react'
import styles from './Documents.module.scss'

const CodeBlock = ({ code, list, pre }) => {
  return (
    <>
      <div className={styles.code}>
        <code>{code}</code>
      </div>
      <pre>{pre}</pre>
      <ul className={styles.codeList}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default CodeBlock
