import { useAppDispatch } from '@/store'
import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchBannerDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'

interface Iprops {
  children?: ReactNode
}

const Recommend: FC<Iprops> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('Recommend render : useeffect request the data')
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <TopBanner />
      recommend
    </div>
  )
}

export default memo(Recommend)
