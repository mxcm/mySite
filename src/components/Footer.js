import React from "react"
import styled from "styled-components"
import { theme, mixins } from "@styles"
const { colors, fontSizes, fonts } = theme

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkNavy};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
`
const Copy = styled.div`
  margin: 10px 0;
  font-family: ${fonts.SourceCode};
  font-size: ${fontSizes.xsmall};
  line-height: 1;
`

const Footer = ({ githubInfo }) => (
  <FooterContainer>
    <Copy>
      <div>Designed &amp; Built by Yehui Zhang</div>
    </Copy>
  </FooterContainer>
)

export default Footer
