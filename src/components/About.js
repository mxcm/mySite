import React from "react"
import styled from "styled-components"
import { mixins, media, Section, Heading } from "@styles"

const AboutContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`
const ContentContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`

const About = () => {
  return (
    <AboutContainer id="about">
      <Heading>About me</Heading>
      <FlexContainer>
        <ContentContainer>
          <p>Greetings! </p>
          <p>
            My name is Yèhuī Zhang, a software enginner who enjoys developing
            fast and elegant applications.
          </p>
          <p>
            I recently graduated from University of Oregon with Master's degree
            in Computer Science.
          </p>
          <p>
            During my master's program, I tought several web development courses
            as course instructor.
          </p>
          <p>
            Meanwhile, I was also participating on the research of developing
            deep learning models which predicts the type of diseases based on
            the Electronic Health Records(EHRs).
          </p>
          <p>
            In summer of 2018, I worked as a web developer at{" "}
            <a href="https://www.paloalto.com/">Palo Alto Software</a> for four
            months.
          </p>
        </ContentContainer>
      </FlexContainer>
    </AboutContainer>
  )
}

export default About
