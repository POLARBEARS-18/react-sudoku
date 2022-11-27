import { NUMBERS, SQUARE } from 'types/theme'

interface SquareInput {
  square: SQUARE
  value: NUMBERS
}

export const isInSquare = ({ square, value }: SquareInput) => [...square[0], ...square[1], ...square[2]].includes(value)
