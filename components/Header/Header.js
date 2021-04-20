import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.first}>
        <a href="https://vaibhavmande.com" target="_blank">
          Vaibhav Mande
        </a>
      </div>
      <div className={styles.second}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
