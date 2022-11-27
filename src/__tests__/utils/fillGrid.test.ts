import { GRID } from 'types/theme'
import { fillGrid } from 'utils/fillGrid'

describe('fillGrid', () => {
  it('空のグリッドを埋めるかどうか', () => {
    const grid: GRID = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    fillGrid(grid)
    /* eslint-disable  no-restricted-syntax */
    for (const row in grid) {
      if (grid && Object.prototype.hasOwnProperty.call(grid, 'row')) {
        for (const col in grid[row]) {
          if (grid[row] && Object.prototype.hasOwnProperty.call(grid[row], 'col')) {
            expect(grid[row][col]).toBeGreaterThanOrEqual(1)
            expect(grid[row][col]).toBeLessThanOrEqual(9)
          }
        }
      }
    }
  })

  it('部分的に塗りつぶされた有効なグリッドを埋める', () => {
    const grid: GRID = [
      [0, 4, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    fillGrid(grid)
    /* eslint-disable  no-restricted-syntax */
    for (const row in grid) {
      if (grid && Object.prototype.hasOwnProperty.call(grid, 'row')) {
        for (const col in grid[row]) {
          if (grid[row] && Object.prototype.hasOwnProperty.call(grid[row], 'col')) {
            expect(grid[row][col]).toBeGreaterThanOrEqual(1)
            expect(grid[row][col]).toBeLessThanOrEqual(9)
          }
        }
      }
    }
  })
})
