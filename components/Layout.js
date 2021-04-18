import React from 'react'
import { Header } from './Header/Header'
import { Hero } from './Hero/Hero'
import { Posts } from './Posts/Posts'
import { Footer } from './Footer'

const posts = [
  {
    title: 'This is first post',
    intro: 'This post was written on Wednesday',
  },
  {
    title: 'This is first post',
    intro: 'This post was written on Wednesday',
  },
  {
    title: 'This is first post',
    intro: 'This post was written on Wednesday',
  },
]
export const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Posts posts={posts} />
      <Footer />
    </>
  )
}
