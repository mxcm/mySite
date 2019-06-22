import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const config = require("../config/basics")

const Head = () => (
  <StaticQuery
    query={graphql`
      query siteMetadata {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }
    `}
    render={data => (
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
    )}
  />
)

export default Head
