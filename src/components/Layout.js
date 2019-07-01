import React from "react"
import { Head, Nav } from "@components"
import { GlobalStyle } from "@styles"
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
      <GlobalStyle />
      <Nav />
      {children}
    </div>
  )
}

export default Layout
