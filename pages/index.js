import Head from 'next/head'
import { Layout } from '../components/Layout/Layout'
import { posts } from '../content'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Js Notes - blog by Vaibhav Mande</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const postsData = posts()
  return {
    props: {
      posts: postsData,
    },
  }
}
