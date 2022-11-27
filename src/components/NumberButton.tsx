import { css } from '@emotion/react'
import { fillBlock } from 'modules/reducers/actions'
import { ReducerType } from 'modules/reducers/reducer'
import { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STheme } from 'styles/theme'
import { BLOCK_COORDS, N, NUMBERS } from 'types/theme'

interface NumberButtonProps {
  value: NUMBERS
}

interface NumbersState {
  selectedBlock?: BLOCK_COORDS
  selectedValue: N
}

const NumberButton: FC<NumberButtonProps> = ({ value }) => {
  const state = useSelector<ReducerType, NumbersState>(({ selectedBlock, workingGrid }) => ({
    selectedBlock,
    selectedValue: workingGrid && selectedBlock ? workingGrid[selectedBlock[0]][selectedBlock[1]] : 0,
  }))
  const dispatch = useDispatch()
  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0) {
      dispatch(fillBlock(value, state.selectedBlock))
    }
  }, [dispatch, state.selectedBlock, state.selectedValue, value])
  return (
    <button type="button" onClick={fill} css={SButton}>
      {value}
    </button>
  )
}

export default NumberButton

export const SButton = css`
  align-items: center;
  background-color: ${STheme.colors.black};
  border: 2px solid ${STheme.colors.black};
  border-radius: 4px;
  color: ${STheme.colors.white};
  cursor: pointer;
  display: flex;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  margin: 4px 2px;
  min-height: 40px;
  opacity: 0.9;
  padding: 0;
  transition: ${STheme.transition};

  &:focus {
    border-color: ${STheme.colors.blue};
    outline: none;
  }
`
