import Head from 'next/head'
import { Layout } from '../components/Layout'
export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Js Notes - blog by Vaibhav Mande</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  )
}

Home.getInitialProps = () => {
  return {
    blogTitle: 'This is a title!',
  }
}
