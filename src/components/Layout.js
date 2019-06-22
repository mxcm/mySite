import React from "react"
import Head from "./Head.js"
import { graphql, StaticQuery } from "gatsby"

const query = graphql`
  query siteMetadata {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`

const Layout = ({ children }) => {
  return (
    <div id="root">
      <Head />
      {children}
    </div>
  )
}

export default Layout
