import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: { id: "all", label: "All" },
}

export const filterSlice = createSlice({
  name: 'fil',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer