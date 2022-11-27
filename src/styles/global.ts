import { css } from '@emotion/react'
import { STheme } from './theme'

export const SGlobal = css`
  html {
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
  }

  #root {
    background: ${STheme.colors.background};
    color: ${STheme.colors.black};
    display: flex;
    font-family: sans-serif;
    height: 100%;
    justify-content: center;
    padding: 0.9375em;
  }
`
