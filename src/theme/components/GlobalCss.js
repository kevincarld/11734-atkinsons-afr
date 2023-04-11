import { Global } from '@emotion/react'

const GlobalCss = () => (
  <Global
    styles={`

    html,
    body {
      overscroll-behavior: none;
    }
    @font-face {
      font-family: 'Fact Expanded';
      src: url('./fonts/Fact-Expanded.woff2') format('woff2'),
          url('./fonts/Fact-Expanded.woff') format('woff'),
          url('./fonts/Fact-Expanded.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
        font-family: 'Fact';
        src: url('./fonts/Fact-LightItalic.woff2') format('woff2'),
            url('./fonts/Fact-LightItalic.woff') format('woff'),
            url('./fonts/Fact-LightItalic.ttf') format('truetype');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Fact';
        src: url('./fonts/Fact-Light.woff2') format('woff2'),
            url('./fonts/Fact-Light.woff') format('woff'),
            url('./fonts/Fact-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Canela';
        src: url('./fonts/Canela-Bold.woff2') format('woff2'),
            url('./fonts/Canela-Bold.woff') format('woff'),
            url('./fonts/Canela-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Canela';
        src: url('./fonts/Canela-Medium.woff2') format('woff2'),
            url('./fonts/Canela-Medium.woff') format('woff'),
            url('./fonts/Canela-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }



      /* spacer */
      p:not(:last-child) {
        margin-bottom: 24px;

        @media(min-width: 1280px) {
          margin-bottom: 30px;
        }
      }

    `}
  />
)

export default GlobalCss