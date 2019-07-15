import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { mixins, Section, Heading } from "@styles"

const ContactContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`

const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Heading>Contact me</Heading>

      <EmailLink
        href={`mailto:yehui.zh@gmail.com`}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        My email
      </EmailLink>
    </ContactContainer>
  )
}

export default Contact
