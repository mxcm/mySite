/**
 * Copied from https://github.com/styled-components/styled-components/blob/c3eedbeb79621acd668e15ed2d63107528ed81c3/packages/styled-components/docs/tips-and-tricks.md#media-templates
 */
import { css } from "styled-components"

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default media
