import { configureStore } from '@reduxjs/toolkit'

import filterSlice from 'reducers/filterSlice'

export const store = configureStore({
  reducer: {
    fil: filterSlice
  }
})