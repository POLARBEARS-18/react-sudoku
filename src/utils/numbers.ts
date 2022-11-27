import global from 'global'
import { GRID } from 'types/theme'
import { copyGrid, solveGrid } from './grid'

/**
 * グリッドから数字を削除する
 * @param grid
 * @param attempts 試行回数 。
 */
export const removeNumbers = (grid: GRID, attempts = 5) => {
  const gridValue = grid
  let attemptsValue = attempts

  while (attemptsValue > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (gridValue[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }

    const backup = gridValue[row][col]
    gridValue[row][col] = 0

    // copy grid
    const gridCopy = copyGrid(gridValue)
    global.counter = 0
    solveGrid(gridCopy)

    // グローバルカウンターを設定
    if (global.counter !== 1) {
      gridValue[row][col] = backup
      attemptsValue -= 1
    }

    // if global counter is not 1
  }
  return gridValue
}

/**
 * 0 から 8 までの範囲でランダムなグリッドインデックスを返す
 * @returns
 */
const getRandomIndex = () => Math.floor(Math.random() * Math.floor(9))
