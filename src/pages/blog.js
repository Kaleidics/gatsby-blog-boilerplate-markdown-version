import React from "react"
import  { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <h1>Blog</h1>
      <p>Posts here</p>
      <ol>
        {
          data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li>
                <Link to={`/blog/${edge.node.fields.slug}`} >this go</Link>
                <h2>{edge.node.frontmatter.title}</h2>
                <h2>{edge.node.frontmatter.date}</h2>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default BlogPage
