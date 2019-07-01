import React from "react"
import styled from "styled-components"
import { Layout, Hero } from "@components"
import { mixins } from "@styles"

const Main = styled.main`
  ${mixins.sidePadding};
  counter-reset: section;
  margin: 0 auto;
  width: 100%;
`

export default () => (
  <Layout>
    <Main>
      <Hero />
    </Main>
  </Layout>
)
