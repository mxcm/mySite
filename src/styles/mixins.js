import { css } from "styled-components"
import theme from "./theme"
import media from "./media"
const { colors, fonts } = theme

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phone`padding: 0 25px;`};
  `,
}

export default mixins
