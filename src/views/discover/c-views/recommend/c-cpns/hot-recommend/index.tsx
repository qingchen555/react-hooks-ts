import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AreaheaderV1 from '@/components/area-header-rmd'
import { useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'
import { shallowEqual } from 'react-redux'
import { RecommendWrapper } from './style'

interface Iprops {
  children?: ReactNode
}

const HotRecommend: FC<Iprops> = () => {
  const { hotRecommends } = useAppSelector(
    state => ({ hotRecommends: state.recommend.hotRecommends }),
    shallowEqual
  )
  return (
    <RecommendWrapper>
      <AreaheaderV1
        title='热门推荐'
        keyWords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink='/discover/songs'
      />
      <div className='recommend-list'>
        {hotRecommends.map((item: any) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
