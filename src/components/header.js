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
      <div className="header__inner">
        <div className="header__icon"></div>
        <h1 className="header__heading"> Code UI</h1>
      </div>
      
    </header>
  )
}

export default Header


{/* <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/blog">Blog</Link>
      </p>
      <p>
        <Link to="/contact">Contact</Link>
      </p> */}
