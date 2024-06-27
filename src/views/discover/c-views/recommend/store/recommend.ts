import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res = await getBanners()
  console.log('request the data')
  dispatch(changeBannersAction(res.banners))

  // return res.banners
})

export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8)

    dispatch(changeRecommendsAction(res.result))
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: []
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
      console.log('reducer : update the state value ')
    },
    changeRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
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
export const { changeBannersAction, changeRecommendsAction } = recommendSlice.actions
export default recommendSlice.reducer
