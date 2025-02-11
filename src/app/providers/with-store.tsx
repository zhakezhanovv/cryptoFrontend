import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../lib/store'

export const withStore = (component: () => ReactNode) => () => <Provider store={store}>{component()}</Provider>
