import React from 'react'
import { Header } from './Header/Header'
import { Hero } from './Hero/Hero'
import { Posts } from './Posts/Posts'
import { Footer } from './Footer/Footer'
import { posts } from '../content'

// const posts = [
//   {
//     title: 'This is first post',
//     intro: 'This post was written on Wednesday',
//   },
//   {
//     title: 'This is first post',
//     intro: 'This post was written on Wednesday',
//   },
//   {
//     title: 'This is first post',
//     intro: 'This post was written on Wednesday',
//   },
// ]
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
