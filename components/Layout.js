import React from 'react'
import { Header } from './Header/Header'
import { Hero } from './Hero/Hero'
import { Posts } from './Posts/Posts'
import { Footer } from './Footer/Footer'

export const Layout = ({ posts }) => {
  return (
    <>
      <Header />
      <Hero />
      <Posts posts={posts} />
      <Footer />
    </>
  )
}
