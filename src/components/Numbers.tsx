import { css } from '@emotion/react'
import { FC } from 'react'
import { NUMBERS } from 'types/theme'
import NumberButton from './NumberButton'

const Numbers: FC = () => (
  <div css={SNumbersButton}>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((value) => (
      <NumberButton key={value} value={value} />
    ))}
  </div>
)

export default Numbers

const SNumbersButton = css`
  display: flex;
  flex-flow: row;
`
