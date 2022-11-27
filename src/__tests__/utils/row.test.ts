import { GRID } from 'types/theme'
import { isInRow } from 'utils/row'

describe('isInRow', () => {
  it('値がグリッドの行にある場合はtrueを返す', () => {
    const grid: GRID = [
      [5, 3, 5, 6, 7, 5, 1, 9, 5],
      [1, 5, 8, 5, 2, 3, 6, 5, 6],
      [8, 4, 6, 3, 2, 6, 7, 8, 5],
      [2, 3, 6, 7, 9, 5, 3, 3, 5],
      [9, 7, 4, 7, 5, 3, 3, 2, 6],
      [4, 5, 8, 9, 6, 3, 2, 6, 7],
      [1, 3, 5, 3, 3, 7, 9, 3, 6],
      [3, 8, 7, 5, 6, 9, 1, 3, 2],
      [8, 6, 5, 4, 3, 6, 7, 8, 9],
    ]

    expect(isInRow({ row: 0, grid, value: 9 })).toBeTruthy()
    expect(isInRow({ row: 5, grid, value: 9 })).toBeTruthy()
    expect(isInRow({ row: 8, grid, value: 9 })).toBeTruthy()
  })

  it('値がグリッドの行にない場合はfalseを返す', () => {
    const grid: GRID = [
      [5, 3, 5, 6, 7, 5, 1, 0, 5],
      [1, 5, 8, 5, 2, 3, 6, 5, 6],
      [8, 4, 6, 3, 2, 6, 7, 8, 5],
      [2, 3, 6, 7, 9, 5, 3, 3, 5],
      [9, 7, 4, 7, 5, 3, 3, 2, 6],
      [4, 5, 8, 0, 6, 3, 2, 6, 7],
      [1, 3, 5, 3, 3, 7, 9, 3, 6],
      [3, 8, 7, 5, 6, 9, 1, 3, 2],
      [8, 6, 5, 4, 3, 6, 7, 8, 0],
    ]

    expect(isInRow({ row: 0, grid, value: 9 })).toBeFalsy()
    expect(isInRow({ row: 5, grid, value: 9 })).toBeFalsy()
    expect(isInRow({ row: 8, grid, value: 9 })).toBeFalsy()
  })
})
