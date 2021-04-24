import Head from 'next/head'
import { Layout } from '../components/Layout/Layout'
import { totalPosts } from '../lib/totalPosts'
import path from 'path'
import { promises as fs } from 'fs'
import meta from '../lib/meta.json'

const Home = ({ posts }) => (
  <>
    <Head>
      <title>Js Notes - blog by Vaibhav Mande</title>
      <link rel="icon" href="/jsnotes/favicon.ico" />
    </Head>
    <Layout posts={posts} />
  </>
)

export async function getStaticProps() {
  const directory = path.join(process.cwd(), 'pages/post')
  const documents = await fs.readdir(directory)

  const withMeta = documents.map((document) => meta[document] ?? null)

  return {
    props: {
      posts: withMeta,
    },
  }
}

export default Home
