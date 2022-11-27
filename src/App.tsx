import { FC } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { css } from '@emotion/react'
import Home from 'Home'

const App: FC = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App

export const SLink = css`
  text-decoration: none;
  color: black;
`
