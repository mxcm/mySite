import { createGlobalStyle } from "styled-components"
import * as fontFamily from "./fonts"
import theme from "./theme"
const { colors, fonts } = theme
import media from "./media"

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Source Code Pro';
    src: url(${fontFamily.SourceCodeProRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: 'Source Code Pro';
    src: url(${fontFamily.SourceCodeProLight}) format('truetype');
    font-weight: 300;
    font-style: light;
    font-display: auto;
}

@font-face {
    font-family: 'Source Code Pro';
    src: url(${fontFamily.SourceCodeProBold}) format('truetype');
    font-weight: 700;
    font-style: bold;
    font-display: auto;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${fontFamily.MontserratRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${fontFamily.MontserratItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: auto;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${fontFamily.MontserratLight}) format('truetype');
    font-weight: 300;
    font-style: light;
    font-display: auto;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${fontFamily.MontserratBold}) format('truetype');
    font-weight: 700;
    font-style: bold;
    font-display: auto;
}

@font-face {
    font-family: 'ZCOOL KuaiLe';
    src: url(${fontFamily.ZCOOLKuaiLeRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
}

html {
    box-sizing: border-box;
    width: 100%;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.clouds};
    color: ${colors.midnightBlue};
    line-height: 1.3;
    font-family: ${fonts.Montserrat};
    font-size: 16px;
    ${media.tablet`font-size: 12px;`}
}
`

export default GlobalStyle
