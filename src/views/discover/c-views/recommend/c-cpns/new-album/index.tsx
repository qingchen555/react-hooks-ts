import { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import AreaheaderV1 from '@/components/area-header-rmd/index'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import NewAlbumItem from '@/components/new-album-item'

interface Iprops {
  children?: ReactNode
}

const NewAlbum: FC<Iprops> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  /*从store中获取数据*/
  const { newAlbums } = useAppSelector(
    state => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqual
  )
  /*事件处理函数*/
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }

  return (
    <AlbumWrapper>
      <AreaheaderV1 title='新碟上架' moreLink='/discover/album' />
      <div className='content'>
        <div className='sprite_02 arrow arrow-left' onClick={handlePrevClick} />
        <div className='banner'>
          <Carousel ref={bannerRef} dots={false} speed={2000}>
            {[0, 1].map(item => {
              return (
                <div key={item}>
                  <div className='album-list'>
                    {newAlbums.slice(item * 5, (item + 1) * 5).map(album => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className='sprite_02 arrow arrow-right' onClick={handleNextClick} />
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
