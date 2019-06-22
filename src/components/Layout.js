import React from "react"
import Head from "./Head.js"
import { GlobalStyle } from "../styles/index"
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
      {children}
    </div>
  )
}

export default Layout
