import { GRID, NUMBERS } from 'types/theme'
import { isInCol } from './col'
import { checkGrid } from './grid'
import { identifySquare } from './identifySquare'
import { isInRow } from './row'
import { shuffle } from './shuffle'
import { isInSquare } from './square'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 *
 * @param grid  9x9 sudoku grid
 * @returns
 */
export const fillGrid = (grid: GRID) => {
  const gridValue = grid
  let row = 0
  let col = 0
  for (let i = 0; i < 81; i += 1) {
    row = Math.floor(i / 9)
    col = i % 9

    if (gridValue[row][col] === 0) {
      shuffle(numbers)

      /* eslint-disable  no-restricted-syntax */
      for (const value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ col, grid, value })) {
            const square = identifySquare({ grid, row, col })
            if (!isInSquare({ square, value })) {
              gridValue[row][col] = value
              if (checkGrid(gridValue)) return true
              if (fillGrid(gridValue)) return true
            }
          }
        }
      }
      break
    }
  }
  gridValue[row][col] = 0
  return false
}
