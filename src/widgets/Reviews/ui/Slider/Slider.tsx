import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import './Slider.scss'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import ArrowIcon from '@/shared/assets/icons/arrow-right.svg?react'

import { mockReviews } from '../../model/mocks/slider'
import { SliderItem } from '../SliderItem/SliderItem'

export const Slider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      modules={[Navigation, Pagination]}
      className='reviews-slider'
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        clickable: true,
        enabled: true,
        el: '.swiper-pagination',
      }}
      breakpoints={{
        1215: { slidesPerView: 3 },
        767: {
          slidesPerView: 2,
          navigation: false,
        },
        0: {
          slidesPerView: 1,
          navigation: false,
          spaceBetween: 10,
          autoHeight: true,
        },
      }}
    >
      {mockReviews.map((el, i) => {
        return (
          <SwiperSlide key={i} className='reviews-slide'>
            <SliderItem item={el} />
          </SwiperSlide>
        )
      })}
      <div className='swiper-pagination' />
      <div className='swiper-button-prev'>
        <ArrowIcon width={32} height={32} className='left-arrow-slider' />
      </div>
      <div className='swiper-button-next'>
        <ArrowIcon width={32} height={32} />
      </div>
    </Swiper>
  )
}
