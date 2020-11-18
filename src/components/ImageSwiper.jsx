import React, { useState } from 'react'
import Swiper from 'react-id-swiper'
import SwiperImage1 from '../assets/images/slider-1.png'
import SwiperImage2 from '../assets/images/slider-2.png'
import SwiperImage3 from '../assets/images/slider-3.png'
import 'swiper/css/swiper.css'

const ImageSwiper = () => {

  const [params] = useState({
    pagination: {
      el: '.swiper-pagination hidden',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: '.swiper-button-next .swiper-button-white',
      prevEl: '.swiper-button-prev .swiper-button-white'
    },
    loop: true
  })

  const imageTexts = [
    {
    id: 1,
    text: '効果測定：メール配信結果の効果測定を行い、営業メールの文面のパフォーマンスを向上させます',
    img: SwiperImage1
    },
    {id: 2,
     text: 'キャンペーン作成：作ったリストに対して営業メールを組み合わせ配信予約を行います',
     img: SwiperImage2
    },
    {id: 3,
     text: 'リスト検索：様々な検索軸で営業リストを検索することが可能です',
     img: SwiperImage3
    }
  ]

  return (
    <Swiper {...params}>
      {imageTexts.map(imageText => (
        <div className="swipe-thumb" key={imageText.id}>
          <img src={imageText.img} alt='スワイプ画像' />
          <p>{imageText.text}</p>
        </div>
      ))}
    </Swiper>
  )
}

export default ImageSwiper