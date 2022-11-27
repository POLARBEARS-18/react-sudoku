import { GRID, NUMBERS } from 'types/theme'

interface RowInput {
  grid: GRID
  row: number
  value: NUMBERS
}

/**
 * 値が現在のグリッド行で既に使用されている場合に true を返す
 * @param input
 * @returns boolean
 */
export const isInRow = ({ grid, row, value }: RowInput): boolean => grid[row].includes(value)
