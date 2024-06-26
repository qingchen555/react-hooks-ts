import { useAppSelector } from '@/store'
import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'

interface Iprops {
  children?: ReactNode
}

const TopBanner: FC<Iprops> = () => {
  // 从store中获取数据
  const { banners } = useAppSelector(state => {
    console.log('selector:', state.recommend.banners)
    return { banners: state.recommend.banners }
  }, shallowEqual)
  return (
    <div>
      {banners.map((item: any) => {
        return (
          <div className='banner-item' key={item.imageUrl}>
            <img className='image' src={item.imageUrl} alt={item.typeTitle} />
          </div>
        )
      })}
    </div>
  )
}

export default memo(TopBanner)
