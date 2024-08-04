import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend, getNewAlbum, getPlaylistDetail } from '../service/recommend'

// export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
//   const res = await getBanners()
//   console.log('request the data')
//   dispatch(changeBannersAction(res.banners))
// })

// export const fetchHotRecommendAction = createAsyncThunk(
//   'hotRecommend',
//   async (arg, { dispatch }) => {
//     const res = await getHotRecommend(8)

//     dispatch(changeRecommendsAction(res.result))
//   }
// )

// export const fetchNewAlbumAction = createAsyncThunk('newAlbums', async (arg, { dispatch }) => {
//   const res = await getNewAlbum()
//   dispatch(changeNewAlbumsAction(res.albums))
// })

export const fetchRecommendDataAction = createAsyncThunk('fetchData', (_, { dispatch }) => {
  getBanners().then(res => {
    dispatch(changeBannersAction(res.banners))
  })

  getHotRecommend(8).then(res => {
    dispatch(changeRecommendsAction(res.result))
  })
  getNewAlbum().then(res => {
    dispatch(changeNewAlbumsAction(res.albums))
  })
})

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk('rankingData', async (_, { dispatch }) => {
  // for (const id of rankingIds) {
  //   getPlaylistDetail(id).then((res) => {
  //     switch (id) {
  //       case 19723756:
  //         console.log('飙升榜的数据', res)
  //         break
  //       case 3779629:
  //         console.log('新歌榜', res)
  //         break
  //       case 2884035:
  //         console.log('原创榜数据', res)
  //         break
  //       default:
  //         console.log('原创榜数据', res)
  //     }
  //   })
  // }
  const promises: Promise<any>[] = []
  for (const id of rankingIds) {
    promises.push(getPlaylistDetail(id))
  }
  Promise.all(promises).then(res => {
    console.log('==========res', res)
    const playlists = res.filter(item => item.playlist).map(item => item.playlist)
    dispatch(changeRankingsAction(playlists))
  })
})

interface IRecommendState {
  banners: any[]
  hotRecommends: []
  newAlbums: any[]
  rankings: []
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      console.log('rankings', payload)
      state.rankings = payload
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
export const {
  changeBannersAction,
  changeRecommendsAction,
  changeNewAlbumsAction,
  changeRankingsAction
} = recommendSlice.actions
export default recommendSlice.reducer
