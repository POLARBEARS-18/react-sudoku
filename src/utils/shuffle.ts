/**
 *Fisher-Yatesアルゴリズムを使用した配列シャッフル関数
 * @param array シャッフルする配列
 */

/* eslint-disable  no-param-reassign ,@typescript-eslint/no-unsafe-assignment */
export const shuffle = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
