import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme, mixins, media, Section } from "@styles"
const { colors, fontSizes, fonts } = theme

const HeroContainer = styled(Section)`
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`
const Hi = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
`
const Name = styled.h2`
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`
const Subtitle = styled.h3`
  font-size: 40px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`
const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <Hi>Hello, my name is</Hi>
      <Name>Yehui Zhang</Name>
      <Subtitle>I like to build THINGS</Subtitle>
      {/* <Blurb>Something here</Blurb> */}
    </HeroContainer>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
