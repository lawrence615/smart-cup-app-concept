import { configureStore } from '@reduxjs/toolkit'

import filterSlice from 'reducers/filterSlice'
import mugSlice from 'reducers/mugSlice'

export const store = configureStore({
  reducer: {
    fil: filterSlice,
    mugg: mugSlice
  }
})