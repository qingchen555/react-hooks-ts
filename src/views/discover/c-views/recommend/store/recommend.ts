import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res = await getBanners()
  console.log('request the data')
  dispatch(changeBannersAction(res.banners))

  // return res.banners
})

interface IRecommendState {
  banners: any[]
}

const initialState: IRecommendState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
      console.log('reducer : update the state value ')
    }
  }
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

// fetchBannerDataAction 异步返回的值分别对应不同的响应状态
// extraReducers ： 可以在浏览器redux中查看状态
export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
