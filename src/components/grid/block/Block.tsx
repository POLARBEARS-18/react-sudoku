import { css } from '@emotion/react'
import { selectBlock } from 'modules/reducers/actions'
import { ReducerType } from 'modules/reducers/reducer'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STheme } from 'styles/theme'
import { INDEX, N } from 'types/theme'

interface BlockProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface BlockState {
  isActive: boolean
  isPuzzle: boolean
  value: N
}

interface BlockCssType {
  cssProps: Pick<BlockState, 'isActive' | 'isPuzzle'>
}

const Block: FC<BlockProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<ReducerType, BlockState>(({ challengeGrid, selectedBlock, workingGrid }) => ({
    isActive: selectedBlock ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex : false,
    isPuzzle: !!(challengeGrid && challengeGrid[rowIndex][colIndex] !== 0),
    value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
  }))
  const dispatch = useDispatch()
  const handleClick = () => {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <div
      onMouseDown={handleClick}
      role="button"
      tabIndex={0}
      data-cy={`block-${rowIndex}-${colIndex}`}
      css={SContainer({ cssProps: { isActive: state.isActive, isPuzzle: state.isPuzzle } })}
    >
      {state.value === 0 ? '' : state.value}
    </div>
  )
}
export default Block

const SContainer = ({ cssProps }: BlockCssType) => css`
  align-items: center;
  background-color: ${cssProps.isActive ? STheme.colors.blue : STheme.colors.white};
  border: solid 1px ${STheme.colors.black};
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  font-size: 1.25rem;
  font-weight: ${cssProps.isPuzzle ? 'bold' : 'normal'};
  height: auto;
  justify-content: center;
  transition: ${STheme.transition};
  user-select: none;

  &::before {
    content: '';
    padding-top: 100%;
    float: left;
  }

  &:hover {
    background-color: ${STheme.colors.lightblue};
  }
`
