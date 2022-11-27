import { GRID, NUMBERS } from 'types/theme'

interface ColInput {
  grid: GRID
  col: number
  value: NUMBERS
}

/**
 * 値が現在のグリッド行で既に使用されている場合に true を返す
 * @param input
 * @returns boolean
 */
export const isInCol = ({ grid, col, value }: ColInput): boolean => {
  for (let i = 0; i < 9; i += 1) if (value === grid[i][col]) return true

  return false
}
