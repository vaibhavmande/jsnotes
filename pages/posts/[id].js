import React from 'react'
import matter from 'gray-matter'
import Head from 'next/head'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { PostHeader } from '../../components/PostHeader/PostHeader'
import { PostContents } from '../../components/PostContents/PostContents'
import styles from '../../components/Layout/Layout.module.scss'

function PostTemplate({ content, data }) {
  const frontmatter = data
  return (
    <>
      <Head>
        <title>Js Notes - blog by Vaibhav Mande</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.parent}>
        <Header />
        <PostHeader
          title={frontmatter.title}
          intro={frontmatter.intro}
          date={frontmatter.date}
        />
        <PostContents content={content} />
        <Footer />
      </div>
    </>
  )
}

PostTemplate.getInitialProps = async (context) => {
  const { id } = context.query

  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${id}.md`)

  // Parse .md data through `matter`
  const data = matter(content.default)

  // Pass data to our component props
  return { ...data }
}

export default PostTemplate
