import React from "react"
import { Head, Nav, Footer } from "@components"
import { GlobalStyle } from "@styles"

const Layout = ({ children }) => {
  return (
    <div id="root">
      <Head />
      <GlobalStyle />
      <div className="container">
        <Nav />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
