import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'

import "../sass/main.scss"

const IndexPage = () => {
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
    <Layout>
      <section>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <Link to={`/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
            
            </Link>
          )
        })}
      </section>
    </Layout>
  )
}

export default IndexPage
