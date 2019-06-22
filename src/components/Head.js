import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

import favicon from "../../static/images/favicon.png"

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
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
    )}
  />
)

export default Head
