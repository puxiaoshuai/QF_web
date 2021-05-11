import {
  createSlice
} from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    num: 20
  },
  reducers: {
    add: (state) => {
      state.num += 1
    },
    decrement: (state) => {
      state.num -= 1
    }
  }
})
export const {
  actions,
  reducer
} = counterSlice
export default reducer