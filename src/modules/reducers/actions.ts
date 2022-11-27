import { Action, AnyAction } from '@reduxjs/toolkit'
import { BLOCK_COORDS, NUMBERS } from 'types/theme'

export const CREATE_GRID = 'CREATE_GRID'
export const FILL_BLOCK = 'FILL_BLOCK'
export const SELECT_BLOCK = 'SELECT_BLOCK'

export const createGrid = (): Action => ({ type: CREATE_GRID })
export const fillBlock = (value: NUMBERS, coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: FILL_BLOCK,
  value,
})
export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: SELECT_BLOCK,
})
