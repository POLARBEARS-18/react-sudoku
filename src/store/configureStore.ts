import { compose, createStore, Store } from '@reduxjs/toolkit'
import { Action, reducer, ReducerType } from 'modules/reducers/reducer'
import storage from 'redux-persist/lib/storage'
import { Persistor, persistReducer, persistStore } from 'redux-persist'
import { PersistPartial } from 'redux-persist/es/persistReducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

interface ConfigureStore {
  store: Store<ReducerType & PersistPartial, Action>
  persistor: Persistor
}

const presistConfig = {
  key: 'root',
  storage,
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const presitedReducer = persistReducer(presistConfig, reducer)

export const configureStore = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const store = createStore(presitedReducer, composeEnhancers())
  const persistor = persistStore(store)
  return { store, persistor }
}
