import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'redux'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload // 在 redux toolkit 中可以直接改变 state 的值
    }
  }
})
export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
