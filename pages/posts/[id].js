import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

function PostTemplate({ content, data }) {
  const frontmatter = data
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
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

  return { slug }
}

export default PostTemplate
