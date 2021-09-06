import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mug: null,
}

export const mugSlice = createSlice({
  name: 'mugg',
  initialState,
  reducers: {
    setMug: (state, action) => {
      state.mug = action.payload
    }
  }
})

export const { setMug } = mugSlice.actions

export default mugSlice.reducer