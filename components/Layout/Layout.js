import React from 'react'
import { Header } from '../Header/Header'
import { Hero } from '../Hero/Hero'
import { Posts } from '../Posts/Posts'
import { Footer } from '../Footer/Footer'
import styles from './Layout.module.scss'

export const Layout = ({ posts }) => {
  return (
    <div className={styles.parent}>
      <Header />
      <Hero />
      <Posts posts={posts} />
      <Footer />
    </div>
  )
}
