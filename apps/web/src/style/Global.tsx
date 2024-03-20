import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Changa', sans-serif;
  }
  body {
    // background-color: #f5eda5;
    background-image: url(/images/background.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
