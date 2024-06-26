import { useAppSelector } from '@/store'
import { memo, useRef, useState } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'
import classNames from 'classnames'

interface Iprops {
  children?: ReactNode
}

const TopBanner: FC<Iprops> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  //获取Carousel 元素
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 从store中获取数据
  const { banners } = useAppSelector(state => {
    console.log('selector:', state.recommend.banners)
    return { banners: state.recommend.banners || [] }
  }, shallowEqual)

  // 处理轮播点击事件
  function handlePrevClick() {
    bannerRef.current?.prev()
  }

  function handleNextClick() {
    bannerRef.current?.next()
  }

  // 切换面板的回掉
  function handleBeforeChange() {
    console.log('000')
  }

  function handleAfterChange(current: number) {
    console.log('current', current)
    setCurrentIndex(current)
  }

  //动态获取轮播背景图片
  let bgINmageUrl = banners[currentIndex]?.imageUrl
  if (bgINmageUrl) {
    bgINmageUrl = `${bgINmageUrl}?imageView&blur=40x20`
  }

  return (
    <BannerWrapper style={{ background: `url('${bgINmageUrl}') center center/6000px` }}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            effect='fade'
            autoplaySpeed={2000}
            ref={bannerRef}
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {banners.map(item => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
          <ul className='dots'>
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={handlePrevClick}></button>
          <button className='btn right' onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
