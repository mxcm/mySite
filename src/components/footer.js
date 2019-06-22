import React from "react"
import { IconGithub, IconLinkedin } from "./icons/index"

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

const SocialContainer = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`

const Footer = () => <div></div>
