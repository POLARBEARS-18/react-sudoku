import { css } from '@emotion/react'
import Grid from 'components/grid/Grid'
import NewButton from 'components/NewButton'
import Numbers from 'components/Numbers'
import { FC } from 'react'
import { STheme } from 'styles/theme'

const Home: FC = () => (
  <div data-cy="content" css={SContent}>
    <h1 data-cy="title" css={STitle}>
      Sudoku
    </h1>
    <div data-cy="card" css={SCard}>
      <NewButton />
      <Grid />
      <Numbers />
    </div>
  </div>
)

export default Home

const SContent = css`
  max-width: 31.25em;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`
const STitle = css`
  color: ${STheme.colors.white};
  margin-top: 0;
  text-align: center;
`

const SCard = css`
  background-color: ${STheme.colors.white};
  border-radius: 0.9375em;
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  max-height: fit-content;
  padding: 0.9375em;
`
