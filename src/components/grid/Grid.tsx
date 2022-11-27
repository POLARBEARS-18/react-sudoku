import { css } from '@emotion/react'
import { createGrid, fillBlock, selectBlock } from 'modules/reducers/actions'
import { FC, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STheme } from 'styles/theme'
import { BLOCK_COORDS, GRID, INDEX, N, NUMBERS } from 'types/theme'
import useMouseTrap from 'react-hook-mousetrap'
import { ReducerType } from 'modules/reducers/reducer'
import { AnyAction, Dispatch } from 'redux'
import Block from './block/Block'

type GridState = {
  selectedBlock?: BLOCK_COORDS
  selectedValue: N
  solvedGrid?: GRID
}

const Grid: FC = () => {
  const serialNumber = Array.from({ length: 9 }).map((v, k) => k)

  const state = useSelector<ReducerType, GridState>(({ selectedBlock, solvedGrid, workingGrid }) => ({
    selectedBlock,
    selectedValue: workingGrid && selectedBlock ? workingGrid[selectedBlock[0]][selectedBlock[1]] : 0,
    solvedGrid,
  }))
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])

  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0) {
        dispatch(fillBlock(n, state.selectedBlock))
      }
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  )

  // キーボード操作
  const moveDown = () => {
    if (state.selectedBlock && state.selectedBlock[0] < 8)
      dispatch(selectBlock([(state.selectedBlock[0] + 1) as INDEX, state.selectedBlock[1]]))
  }
  const moveUp = () => {
    if (state.selectedBlock && state.selectedBlock[0] > 0)
      dispatch(selectBlock([(state.selectedBlock[0] - 1) as INDEX, state.selectedBlock[1]]))
  }
  const moveLeft = () => {
    if (state.selectedBlock && state.selectedBlock[1] > 0)
      dispatch(selectBlock([state.selectedBlock[0], (state.selectedBlock[1] - 1) as INDEX]))
  }
  const moveRight = () => {
    if (state.selectedBlock && state.selectedBlock[1] < 8)
      dispatch(selectBlock([state.selectedBlock[0], (state.selectedBlock[1] + 1) as INDEX]))
  }

  /* eslint-disable  @typescript-eslint/no-unsafe-call */
  useMouseTrap('1', () => fill(1))
  useMouseTrap('2', () => fill(2))
  useMouseTrap('3', () => fill(3))
  useMouseTrap('4', () => fill(4))
  useMouseTrap('5', () => fill(5))
  useMouseTrap('6', () => fill(6))
  useMouseTrap('7', () => fill(7))
  useMouseTrap('8', () => fill(8))
  useMouseTrap('9', () => fill(9))
  useMouseTrap('down', moveDown)
  useMouseTrap('up', moveUp)
  useMouseTrap('left', moveLeft)
  useMouseTrap('right', moveRight)

  useEffect(() => {
    if (!state.solvedGrid) create()
  }, [create, state.solvedGrid])

  return (
    <div data-cy="grid-container" css={SContainer}>
      {serialNumber.map((_r, rowIndex) => (
        <div data-cy="grid-row-container" key={_r} css={SRow}>
          {serialNumber.map((_c, colIndex) => (
            <Block colIndex={colIndex as INDEX} rowIndex={rowIndex as INDEX} key={_c} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid

const SContainer = css`
  display: flex;
  flex-direction: column;
  margin: 0.625em 0;
`

const SRow = css`
  display: flex;
  flex-flow: row;

  &:nth-of-type(1) {
    div {
      border-top: solid 4px ${STheme.colors.black};
    }
  }
  &:nth-of-type(3),
  &:nth-of-type(6) {
    div {
      border-bottom: solid 3px ${STheme.colors.black};
    }
  }
  &:nth-of-type(9) {
    border-bottom: solid 4px ${STheme.colors.black};
  }

  div {
    &:nth-of-type(1) {
      border-left: solid 4px ${STheme.colors.black};
    }

    &:nth-of-type(3),
    &:nth-of-type(6),
    &:nth-of-type(9) {
      border-right: solid 4px ${STheme.colors.black};
    }
    &:nth-of-type(4),
    &:nth-of-type(7) {
      border-left: none;
    }
  }
`
