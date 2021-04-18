import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a href="https://vaibhavmande.com">Vaibhav Mande</a>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </header>
  )
}
