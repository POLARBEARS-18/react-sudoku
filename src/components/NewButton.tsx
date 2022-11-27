import { createGrid } from 'modules/reducers/actions'
import { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { SButton } from './NumberButton'

const NewButton: FC = () => {
  const dispatch = useDispatch()
  const createdNewGrid = useCallback(() => {
    if (window.confirm('新しいゲームを開始してもよろしいですか?')) {
      dispatch(createGrid())
    }
  }, [dispatch])
  return (
    <button type="button" onClick={createdNewGrid} css={SButton}>
      New Button
    </button>
  )
}

export default NewButton
