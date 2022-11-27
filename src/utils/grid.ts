import global from 'global'
import { GRID, INDEX, NUMBERS } from 'types/theme'
import { isInCol } from './col'
import { fillGrid } from './fillGrid'
import { identifySquare } from './identifySquare'
import { isInRow } from './row'
import { isInSquare } from './square'

/**
 * グリッドが値で埋まっているかを確認する関数
 * @param grid
 * @returns booleans
 */
export const checkGrid = (grid: GRID) => {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) if (grid[i][j] === 0) return false
  }
  return true
}

/**
 * グリッド作成関数
 */
export const createFullGrid = (): GRID => {
  const gridTmp: GRID = [
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

  fillGrid(gridTmp)

  return gridTmp
}

export const copyGrid = (grid: GRID) => {
  const gridTmp: GRID = [
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

  for (let r: INDEX = 0; r < 9; r += 1) {
    for (let c: INDEX = 0; c < 9; c += 1) {
      gridTmp[r][c] = grid[r][c]
    }
  }
  return gridTmp
}

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * 解が見つかるまで、可能な限りの数の組み合わせをチェックする再帰的関数
 * @param grid 0〜9の値からなる9X9の配列
 */
export const solveGrid = (grid: GRID) => {
  const gridValue = grid

  let row = 0
  let col = 0

  for (let i = 0; i < 81; i += 1) {
    row = Math.floor(i / 9)
    col = i % 9

    if (gridValue[row][col] === 0) {
      /* eslint-disable  no-restricted-syntax */
      for (const value of numbers)
        if (!isInRow({ grid, row, value }))
          if (!isInCol({ col, grid, value })) {
            const square = identifySquare({ col, grid, row })
            if (!isInSquare({ square, value })) {
              gridValue[row][col] = value
              if (checkGrid(gridValue)) {
                global.counter += 1
                break
              } else if (solveGrid(gridValue)) return true
            }
          }
      break
    }
  }

  gridValue[row][col] = 0
  return false
}

/**
 * 任意の次元の2つの配列を比較し，等しい場合は真，そうでない場合は偽を返す。
 * @param arr1
 * @param arr2
 */
export const compareArrays = (arr1: any[], arr2: any[]) => {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return arr1 === arr2

  if (arr1.length !== arr2.length) return false

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  for (let i = 0, len = arr1.length; i < len; i += 1) if (!compareArrays(arr1[i], arr2[i])) return false

  return true
}
