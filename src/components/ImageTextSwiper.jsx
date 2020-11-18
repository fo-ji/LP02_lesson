import React, { useState } from 'react'
import Swiper from 'react-id-swiper'
import GroveImage from '../assets/images/grove.jpg'
import BellfaceImage from '../assets/images/bellface.jpg'
import TimesImage from '../assets/images/times.jpg'
import KoujimachiImage from '../assets/images/koujimachi.jpg'
import 'swiper/css/swiper.css'

const ImageTextSwiper = () => {

  const [params] = useState({
    slidesPerView: 3,
    spaceBetween: 100,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })

  const imageTexts = [
    {
      id: 1,
      text: '1,000名のインフルエンサーを抱える私たちのことを知ってもらうには、リードの獲得が不可欠。APLLO SALESはリストアップからDMじ自動配信まで一気に行えるので、少ないリソースで新規発注を撮ることができています。月に数十万円のリスティングを使うより、費用対効果が高いですね。',
      name: 'GROVE株式会社',
      img: GroveImage
    },
    {id: 2,
     text: 'アポ数を伸ばすためのツールを探していた時にAPOLLO SALESに出会いました。まずじ自分に工数がかからない。リストを出して、そこからボタン一つで1日最大1,000通のメールを遅れます。月に2万通を必ず送れると考えても、どんなに低くても0.1%のアポがくれば20社は取れる。また、費用も決め手でした。',
     name: 'ベルフェイス株式会社',
     img: BellfaceImage
    },
    {id: 3,
     text: '今まで、過去の手持ちリストを当たっているばかりで、新規開拓に課題がありました。APOLLO SALES導入当初は、効果を実感できていませんでしたが、サポートを受けることで顧客へのアプローチ数が圧倒的に増えました。過去4年間の実績より、導入後の4ヶ月の実績の方が上回りました。すでに、APOLLO SALESに支配されている感じです！',
     name: '株式会社アルバイトタイムス',
     img: TimesImage
    },
    {id: 4,
     text: 'APOLLO SALESは開封の有無やURLをクリックしたというのもわかるので、クライアントの課題が数字で伝わって、よりニーズにあった高いアポイントに繋がる実実感しました。サポートを受けることで、本格的に導入した後は10社ぐらいのアポが来ましたが、APOLLO SALESでの操作の時間が極めて短いものでした。',
     name: '麹町パートナーズ株式会社',
     img: KoujimachiImage
    }
  ]

  // [TODO] 後に修正する
  return (
    <Swiper {...params}>
      {imageTexts.map(imageText => (
        <div className='swipe-thumb' key={imageText.id}>
          <img src={imageText.img} alt='スワイプ画像' />
          <div className='text-box'>
            <p>{imageText.text}</p>
            <p>{imageText.name}</p>
          </div>
        </div>
      ))}
    </Swiper>
  )
}

export default ImageTextSwiper