import React from "react"
import styled from "styled-components"
import { Layout, Hero, About, Projects, Contacts } from "@components"
import { mixins } from "@styles"

const Main = styled.main`
  ${mixins.sidePadding};
  counter-reset: section;
  margin: 0 auto;
  width: 100%;
  padding-top: 50px;
`

export default () => (
  <Layout>
    <Main>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </Main>
  </Layout>
)
