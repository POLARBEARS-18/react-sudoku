import { BLOCK_COORDS, GRID, NUMBERS } from 'types/theme'
import { compareArrays, copyGrid, createFullGrid } from 'utils/grid'
import { removeNumbers } from 'utils/numbers'
import { CREATE_GRID, FILL_BLOCK, SELECT_BLOCK } from './actions'

export type ReducerType = {
  challengeGrid?: GRID
  selectedBlock?: BLOCK_COORDS
  solvedGrid?: GRID
  workingGrid?: GRID
}
export type Action = {
  type: string
  coords: BLOCK_COORDS
  value: NUMBERS
}
export type Reducer = ReturnType<typeof reducer>

const initialState: ReducerType = {}

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CREATE_GRID: {
      const solvedGrid = createFullGrid()

      const gridCopy = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(gridCopy)
      const workingGrid = copyGrid(challengeGrid)
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      }
    }

    case FILL_BLOCK: {
      const stateValue = state
      if (stateValue.workingGrid && stateValue.solvedGrid) {
        if (stateValue.solvedGrid[action.coords[0]][action.coords[1]] !== action.value) {
          alert('間違っています')
          return stateValue
        }

        stateValue.workingGrid[action.coords[0]][action.coords[1]] = action.value
        if (compareArrays(stateValue.workingGrid, stateValue.solvedGrid)) {
          alert('成功')
          return { ...stateValue, workingGrid: [...stateValue.workingGrid] as GRID }
        }
      }
      return stateValue
    }

    case SELECT_BLOCK:
      return { ...state, selectedBlock: action.coords }
    default:
      return false
  }
}
