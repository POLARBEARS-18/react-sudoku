import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import { Global, ThemeProvider } from '@emotion/react'
import { SGlobal } from 'styles/global'
import { STheme } from 'styles/theme'
import { Provider } from 'react-redux'
import { configureStore } from 'store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={STheme}>
      <Global styles={SGlobal} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
