import { SQUARE } from 'types/theme'
import { isInSquare } from 'utils/square'

describe('isInSquare', () => {
  it('値が正方形のグリッドの中にある場合はtrueを返す', () => {
    const square: SQUARE = [
      [1, 3, 4],
      [8, 2, 7],
      [6, 9, 5],
    ]

    expect(isInSquare({ square, value: 1 })).toBeTruthy()
    expect(isInSquare({ square, value: 8 })).toBeTruthy()
  })
  it('値が正方形のグリッドの中にない場合はfalseを返す', () => {
    const square: SQUARE = [
      [0, 3, 4],
      [0, 2, 7],
      [6, 9, 5],
    ]

    expect(isInSquare({ square, value: 1 })).toBeFalsy()
    expect(isInSquare({ square, value: 8 })).toBeFalsy()
  })
})
