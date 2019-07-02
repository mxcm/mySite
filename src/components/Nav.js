import React, { Component } from "react"
import Helmet from "react-helmet"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { resumeLink, menuItems, navHeight } from "../config/basics"
import Menu from "./Menu"
import styled from "styled-components"
import { theme, mixins, media } from "@styles"
const { colors, fontSizes, fonts } = theme

const NavContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.navy};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props =>
    props.scrollDirection === "none" ? theme.navHeight : theme.navScrollHeight};
  box-shadow: ${props =>
    props.scrollDirection === "up"
      ? `0 10px 30px -10px ${colors.shadowNavy}`
      : "none"};
  transform: translateY(
    ${props =>
      props.scrollDirection === "down" ? `-${theme.navScrollHeight}` : "0px"}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`
const Navbar = styled.nav`
  position: relative;
  width: 100%;
  color: ${colors.lightestSlate};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  float: right;
  ${media.tablet`display: none;`};
`
const NavList = styled.ol`
  div {
    ${mixins.flexBetween};
  }
`
const NavListItem = styled.li`
  display: inline;
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.medium};
  counter-increment: item 1;
  &:before {
    content: "0" counter(item) ".";
    text-align: right;
    color: ${colors.green};
    font-size: ${fontSizes.xsmall};
  }
`
const NavLink = styled(AnchorLink)`
  padding: 12px 10px;
`
const ResumeLink = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.medium};
`

const DELTA = 5

class Nav extends Component {
  state = {
    isMounted: false,
    menuOpen: false,
    scrollDirection: "none",
    lastScrollTop: 0,
  }

  componentDidMount() {
    this.setState({ isMounted: true })

    window.addEventListener("scroll", () => this.handleScroll())
    window.addEventListener("resize", () => this.handleResize())
  }

  componentWillUnmount() {
    this.setState({ isMounted: false })

    window.removeEventListener("scroll", () => this.handleScroll())
    window.removeEventListener("resize", () => this.handleResize())
  }

  handleScroll = () => {
    const { isMounted, menuOpen, scrollDirection, lastScrollTop } = this.state
    const fromTop = window.scrollY

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: "none" })
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== "down") {
        this.setState({ scrollDirection: "down" })
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== "up") {
        this.setState({ scrollDirection: "up" })
      }
    }

    this.setState({ lastScrollTop: fromTop })
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })

  handleResize = () => {
    if (window.innerWidth > 768 && this.state.menuOpen) {
      this.toggleMenu()
    }
  }

  render() {
    const { isMounted, menuOpen, scrollDirection } = this.state

    return (
      <NavContainer scrollDirection={scrollDirection}>
        <Helmet>
          <body className={menuOpen ? "blur" : ""} />
        </Helmet>
        <Navbar>
          <NavLinks>
            <NavList>
              {menuItems.map(({ item, url }, index) => (
                <NavListItem key={index}>
                  <NavLink href={url}>{item}</NavLink>
                </NavListItem>
              ))}
            </NavList>

            <ResumeLink
              href={resumeLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Resume
            </ResumeLink>
          </NavLinks>
        </Navbar>
      </NavContainer>
    )
  }
}

export default Nav
