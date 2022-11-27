import { GRID, SQUARE } from 'types/theme'

interface IdentifySquare {
  grid: GRID
  row: number
  col: number
}

/**
 * 行と列のインデックスで指定された数独グリッドの現在の正方形を識別して返す関数。
 * @param grid 9x9 object Grid
 * @param row 行
 * @param col 列
 * @returns SQUARE
 */
export const identifySquare = ({ grid, row, col }: IdentifySquare): SQUARE => {
  const square = []
  if (row < 3) {
    if (col < 3) for (let x = 0; x < 3; x += 1) square.push([grid[x][0], grid[x][1], grid[x][2]])
    else if (col < 6) for (let x = 0; x < 3; x += 1) square.push([grid[x][3], grid[x][4], grid[x][5]])
    else for (let x = 0; x < 3; x += 1) square.push([grid[x][6], grid[x][7], grid[x][8]])
  } else if (row < 6) {
    if (col < 3) for (let x = 3; x < 6; x += 1) square.push([grid[x][0], grid[x][1], grid[x][2]])
    else if (col < 6) for (let x = 3; x < 6; x += 1) square.push([grid[x][3], grid[x][4], grid[x][5]])
    else for (let x = 3; x < 6; x += 1) square.push([grid[x][6], grid[x][7], grid[x][8]])
  } else if (col < 3) for (let x = 6; x < 9; x += 1) square.push([grid[x][0], grid[x][1], grid[x][2]])
  else if (col < 6) for (let x = 6; x < 9; x += 1) square.push([grid[x][3], grid[x][4], grid[x][5]])
  else for (let x = 6; x < 9; x += 1) square.push([grid[x][6], grid[x][7], grid[x][8]])

  return square as SQUARE
}
