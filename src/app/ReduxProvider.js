'use client'

import store from '@/states/store'
import React from 'react'
import { Provider } from 'react-redux'

const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ReduxProvider