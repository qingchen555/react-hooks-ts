import { memo } from 'react'
import { RankingWrapper } from './style'

import AreaHeaderV1 from '@/components/area-header-rmd'
import { useAppSelector } from '@/store'
import TopRankingItem from '../top-ranking-item'
import { shallowEqual } from 'react-redux'

import type { FC, ReactNode } from 'react'

export interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankings = [] } = useAppSelector(
    state => ({
      rankings: state.recommend.rankings
    }),
    shallowEqual
  )

  return (
    <RankingWrapper>
      <AreaHeaderV1 title='榜单' moreLink='/discover/ranking'>
        TopRanking
      </AreaHeaderV1>
      <div className='content'>
        {rankings.map((item, index) => {
          return <TopRankingItem key={`${item}-${index}`} itemData={item} />
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
