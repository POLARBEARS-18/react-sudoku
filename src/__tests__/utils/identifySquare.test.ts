import { GRID } from 'types/theme'
import { identifySquare } from 'utils/identifySquare'

describe('identifySquare', () => {
  it('指定されたグリッド、行、および列で正しい正方形を識別できるか', () => {
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
    expect(identifySquare({ col: 2, grid, row: 2 })).toStrictEqual([
      [5, 3, 5],
      [1, 5, 8],
      [8, 4, 6],
    ])
    expect(identifySquare({ col: 5, grid, row: 5 })).toStrictEqual([
      [7, 9, 5],
      [7, 5, 3],
      [0, 6, 3],
    ])
    expect(identifySquare({ col: 8, grid, row: 8 })).toStrictEqual([
      [9, 3, 6],
      [1, 3, 2],
      [7, 8, 0],
    ])
  })
})
