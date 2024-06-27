import { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import AreaheaderV1 from '@/components/area-header-rmd/index'
import { Carousel } from 'antd'

interface Iprops {
  children?: ReactNode
}

const NewAlbum: FC<Iprops> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  /*事件处理函数*/
  function handlePrevClick() {
    console.log('handlePrevClick')
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    console.log('handleNextClick')
    bannerRef.current?.next()
  }

  return (
    <AlbumWrapper>
      <AreaheaderV1 title='新碟上架' moreLink='/discover/album' />
      <div className='content'>
        <div className='sprite_02 arrow arrow-left' onClick={handlePrevClick} />
        <div className='banner'>
          <Carousel ref={bannerRef} dots={false} speed={2000}>
            {[1, 2].map(item => {
              return (
                <h1 className='item' key={item}>
                  {item}
                </h1>
              )
            })}
          </Carousel>
        </div>
        <div className='sprite_02 arrow arrow-right' onClick={handleNextClick} />
      </div>
      NewAlbum
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
