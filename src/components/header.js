import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="header">
      <h1 className="heading-primary">This is the header</h1>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/blog">Blog</Link>
      </p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </header>
  )
}

export default Header
