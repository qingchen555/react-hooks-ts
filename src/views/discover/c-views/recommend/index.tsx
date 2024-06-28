import { useAppDispatch } from '@/store'
import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchRankingDataAction, fetchRecommendDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'

interface Iprops {
  children?: ReactNode
}

const Recommend: FC<Iprops> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('Recommend render : useeffect request the data')
    // dispatch(fetchBannerDataAction()),
    //   dispatch(fetchHotRecommendAction()),
    //   dispatch(fetchNewAlbumAction())
    dispatch(fetchRecommendDataAction()), dispatch(fetchRankingDataAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className='content wrap-v2'>
        <div className='left'>
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className='right'>right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
