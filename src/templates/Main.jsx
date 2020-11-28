import React from 'react'
import styled from 'styled-components'
import Badge from '../components/Badge'
import ImageSwiper from '../components/ImageSwiper'
import ImageTextSwiper from '../components/ImageTextSwiper'
import FormList from '../components/FormList'
import MediumButton from '../components/MediumButton'
import featuresPoint1Image from '../assets/images/features-point1.png'
import featuresPoint2Image from '../assets/images/features-point2.png'
import featuresPoint3Image from '../assets/images/features-point3.png'
import featuresThumb1Image from '../assets/images/features-thumb1.png'
import featuresThumb2Image from '../assets/images/features-thumb2.png'
import featuresThumb3Image from '../assets/images/features-thumb3.png'
import backgroundImage from '../assets/images/background-image.png'
import bannerBellface from '../assets/images/banner-bellface.png'
import bannerJellyfish from '../assets/images/banner-jellyfish.png'
import bannerJoboutique from '../assets/images/banner-jobotique.png'
import bannerLibz from '../assets/images/banner-libz.png'
import bannerTimes from '../assets/images/banner-times.png'
import backgroundContactImage from '../assets/images/bg-contact.jpg'
import backgroundFaqImage from '../assets/images/bg-section-inverse.png'

const Main = () => {

  const Wrapper = styled.div`
    width: 100%;
    @media screen and (max-width: 768px) {
      #point-reverse {
        flex-direction: column-reverse;
      }
      #sm-hidden {
        display: none;
      }
    }
  `

  const Features = styled.div`
    padding: 0 80px;
    color: #003CAA;
    @media screen and (max-width: 768px) {
      padding: 0 20px;
    } 
    h2 {
      margin-bottom: 30px;
      overflow: hidden;
      font-size: 118px;
      font-weight: bold;
      line-height: 1em;
      @media screen and (max-width: 768px) {
        font-size: 32px;
      } 
    }
    h2 > small {
      margin-left: 40px;
      font-size: 26px;
      font-weight: bold;
      line-height: 1em;
      @media screen and (max-width: 768px) {
        margin-left: 20px;
        font-size: 10px;
      } 
    }
  `

  const Point = styled.div`
    display: flex;
    @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    img {
      width: 50%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .textfield {
      margin-top: 50px;
      width: 45%;
      margin-left: auto;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 50px;
      }
    }
    .textfield h3 {
      font-size: 40px;
      font-weight: bold;
      margin-top: 40px;
      margin-bottom: 20px;
      @media screen and (max-width: 768px) {
        font-size: 30px;
      }
    }
    .textfield p {
      font-size: 17px;
      font-weight: bold;
      line-height: 1.8;
      @media screen and (max-width: 768px) {
        font-size: 15px;
      }
    }
  `

  const PointDetail = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    text-align: center;
  `

  const DetailList = styled.div`
    padding: 0 20px;
    width: 28%;
    img {
      width: 100%;
    }
    h4 {
      font-size: 19px;
      font-weight: bold;
      margin-bottom: 30px;
    }
    p {
      font-size: 14px;
      font-weight: bold;
      line-height: 1.8;
    }
  `

  const EasyToUse = styled.div`
    width: 100%;
    font-weight: bold;
    h2 {
      color: #003CAA;
      height: 106px;
      font-size: 101px;
      margin-bottom: -10px;
      text-align: center;
      @media screen and (max-width: 768px) {
        font-size: 40px;
        text-align: left;
        height: 91px;
        padding: 0 20px;
      } 
      small {
        margin-left: 20px;
        font-size: 20px;
        @media screen and (max-width: 768px) {
          display: block;
          margin: 0;
          font-size: 16px;
          line-height: 1.4;
        } 
      }
    }
  `

  const SliderBox = styled.div`
    background-image: url(${backgroundImage});
    background-color: #0030A0;
    background-repeat: no-repeat;
    padding-top: 30px;
    color: #FFFFFF;
    text-align: center;
    .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
      @media screen and (max-width: 768px) {
        font-size: 10px
      }
    }
    .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
      @media screen and (max-width: 768px) {
        font-size: 10px
      }
    }
  `

  const Container = styled.div`
    padding: 0 40px;
    @media screen and (max-width: 768px) {
      padding: 0 20px; 
    }  
    p {
      font-size: 18px;
      line-height: 1.8;
      margin: 60px 0 70px 0;
      @media screen and (max-width: 768px) {
        font-size: 12px;
        margin: 10px 0 10px 0;
      } 
    }
  `

  const UsersVoice = styled.div`
    width: 100%;
    font-weight: bold;
    h2 {
      color: #003CAA;
      height: 106px;
      font-size: 101px;
      margin-bottom: -8px;
      text-align: center;
      @media screen and (max-width: 768px) {
        font-size: 40px;
        padding-top: 50px;
        padding-left: 20px;
        margin: 0 0 0 10px;
        text-align: left;
      }
      small {
        margin-left: 20px;
        font-size: 45px;
        @media screen and (max-width: 768px) {
          display: block;
          font-size: 25px;
          text-align: left;
          margin: 10px 0 0 0;
        }
      }
    }
  `
  // [TODO] 後に修正する ↓
  const SwipeWrapper = styled.div`
    .swipe-thumb {
      width: 100%;
      display: flex;
      @media screen and (max-width: 768px) {
        margin-top: 50px;
      }
    }
    .swipe-thumb img {
      width: 100%;
    }
    .swipe-thumb .text-box {
      background-image: url(${backgroundImage});
      background-repeat: no-repeat;
      color: #FFFFFF;
      max-width: 318px;
      margin-right: 10px;
      padding-top: 40px;
      padding-left: 30px;
      padding-right: 30px;
    }
    .swipe-thumb .text-box p {
      font-size: 17px;
      font-weight: bold;
      line-height: 1.5;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      height: 366px;
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      /* display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex; */
      /* display: flex; */
      /* -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center; */
      /* justify-content: center; */
      /* -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center; */
      /* align-items: center; */
      /* width: 80%; */
    } 
    .swiper-slide:nth-child(2n) {
      width: 400px;
    }
    /* .swiper-slide:nth-child(3n) {
      width: 200px;
    } */
    .swiper-pagination {
      margin-top: 130px;
    }
  `
  // [TODO] 後に修正する ↑ 

  const Banner = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 50px auto 0;
    padding-bottom: 70px;
    @media screen and (max-width: 768px) {
      padding-bottom: 50px;
      img {
        margin: 10px;
        width: 30%;
      }
    }
  `

  const ContactUs = styled.div`
    width: 100%;
    font-weight: bold;
    h2 {
      color: #003CAA;
      height: 106px;
      font-size: 101px;
      margin-bottom: -8px;
      text-align: center;
      @media screen and (max-width: 768px) {
        height: 50px;
        font-size: 25px;
        padding: 0 20px;
      }
      small {
        margin-left: 20px;
        font-size: 30px;
        @media screen and (max-width: 768px) {
          margin-left: 10px;
          font-size: 6px;
        }
      }
    }
    .contact-us-img {
      background-image: url(${backgroundContactImage});
      background-size: cover;
      background-repeat: no-repeat;
      height: 523px;
      @media screen and (max-width: 768px) {
        margin-top: 10px;
        height: 145px;
      }
    }
  `

  const Form = styled.div`
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #0840A7;
    display: flex;
    justify-content: space-between;
    padding: 100px 40px;
    color: #fff;
    @media screen and (max-width: 768px) {
      padding: 20px;
      display: block;
    }
      .text-content {
        width: 50%;
        @media screen and (max-width: 768px) {
          width: 100%;
          padding: 0 20px;
        }
        h3 {
          font-size: 42px;
          margin-bottom: 40px;
          @media screen and (max-width: 768px) {
            font-size: 28px;
            line-height: 1.8em;
          }
        }
        p {
          font-size: 17px;
          font-weight: bold;
          line-height: 1.8em;
          margin: 17px 0;
          @media screen and (max-width: 768px) {
            font-size: 12px;
          }
        }
        .sign {
          margin-top: 50px;
          text-align: right;
          @media screen and (max-width: 768px) {
            margin-top: 20px;
            margin-bottom: 50px;
          }
        }
      }
      .form-content {
        width: 45%;
        @media screen and (max-width: 768px) {
          width: 100%;
          padding: 0 20px;
        }
        h4 {
          font-size: 20px;
          margin-bottom: 30px;
          @media screen and (max-width: 768px) {
            font-size: 15px;
          }
        }
        .comment {
          margin-top: 20px;
          font-weight: normal;
          font-size: 12px;
          @media screen and (max-width: 768px) {
            font-size: 10px;
          }
          a {
            color: #00D0EE;
            text-decoration: underline;
          }
        }
      }
  `
  const Faq = styled.div`
    background-image: url(${backgroundFaqImage});
    background-repeat: no-repeat;
    font-weight: bold;
    color: #003CAA;
    margin: 0 auto;
    padding: 60px 80px 30px;
    @media screen and (max-width: 768px) {
      padding: 50px 20px 20px;
    }
    h2 {
      height: 106px;
      font-size: 101px;
      text-align: center;
      small {
        margin-left: 20px;
        font-size: 45px;
        @media screen and (max-width: 768px) {
          margin-left: 10px;
          font-size: 10px;
        }
      }
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
    .item {
      width: 45%;
      margin: 30px 0;
      font-size: 20px;
      line-height: 1.5;
      @media screen and (max-width: 768px) {
        width: 100%;
        font-size: 17px;
        margin: 18px 0;
      }
    }
    .item .question {
      margin: 25px 0;
    }
    .item .answer {
      position: relative;
      padding: 15px 30px;
    }

    .item .answer::before, .item .answer::after {
      position: absolute;
      content: '';
      width: 20px;
      height: 50px;
    }
    .item .answer::before {
      top: 0;
      left: 0;
      border-top: 2px solid #0045C0;
      border-left: 2px solid #0045C0;
    }
    .item .answer::after {
      bottom: 0;
      right: 0;
      border-bottom: 2px solid #0045C0;
      border-right: 2px solid #0045C0;
    }
  `

  return (
    <>
      <Wrapper>
        <Features id='howto-link'>
          <h2>FEATURES<small>APOLO SALES でできること</small></h2>
          <Point>
            <img src={featuresPoint1Image} />
            <div className='textfield'>
            <Badge label={'Point1'} />
              <h3>簡単に営業リストを<br />作成できる</h3>
              <p>アタックしたい企業の条件を指定すると、APOLLO SALESが インターネット上にある企業情報からリストを作成。 自動で企業リストの収集を行うので、情報収集の手間が省けます。 条件は業種や地域などで指定が可能です。</p>
            </div>
          </Point>
          <Point id='point-reverse'>
            <div className='textfield'>
            <Badge label={'Point2'} />
              <h3>作成した営業リストに<br />自動でアプローチ</h3>
              <p>作成した営業リストに対し、自動でメール送付またはお問い合わせフォーム投稿でアプローチできます。 手間をかけずにアポイントを取得することはもちろん、アプローチ結果をスコア化することができます。</p>
            </div>
            <img src={featuresPoint2Image} />
          </Point>
          <Point>
            <img src={featuresPoint3Image} />
            <div className='textfield'>
            <Badge label={'Point3'} />
              <h3>テレアポの効率を<br />飛躍的に向上させます</h3>
              <p>送ったメールに対して開封した企業がわかるので、 その企業に対してテレアポを行えばアポイントに繋がる確率が飛躍的に向上します。</p>
            </div>
          </Point>
          <PointDetail id='sm-hidden'>
            <DetailList>
              <img src={featuresThumb1Image} />
              <h4>企業条件をカスタマイズして抽出</h4>
              <p>特定の条件の企業情報を、URLなどからリクエストが可能です。 頂いたリクエストはAPOLLO SALESがWEB上からリストアップし、次回営業の条件に反映します。</p>
            </DetailList>
            <DetailList>
              <img src={featuresThumb2Image} />
              <h4>御社の営業リストを活用</h4>
              <p>すでにお持ちの企業リストをCSV形式でインポート可能です。 インポート後は、APOLLO SALESが自動で企業情報を取得し、これまでの営業活動との連携をスムーズに行います。</p>
            </DetailList>
            <DetailList>
              <img src={featuresThumb3Image} />
              <h4>データベースは日々アップデート</h4>
              <p>企業のデータベースは日々アップデートされるので、常に最新の情報で営業リストを作成できます。</p>
            </DetailList>
          </PointDetail>
        </Features>
        <EasyToUse>
          <h2>EASY TO USE<small>誰もが理解しやすいインターフェイス</small></h2>
          {/* [TODO] 後に修正する ↓ */}
          <SliderBox>
            <Container>
              <p>「ビジネス向けソフトウェアは使いにくい」と思っていませんか？<br />APOLLO SALESは、効率化のためゼロから設計し、とても使いやすいインターフェイスです。</p>
              <ImageSwiper />
            </Container>
          </SliderBox>
        </EasyToUse>
        <UsersVoice id='user-voice-link'>
          <h2>User's VOICE<small>導入企業の声</small></h2>
          <SwipeWrapper>
            <ImageTextSwiper />
          </SwipeWrapper>
          {/* [TODO] 後に修正する ↑ */}
          <Banner>
            <img src={bannerBellface} />
            <img src={bannerJellyfish} />
            <img src={bannerJoboutique} />
            <img src={bannerLibz} />
            <img src={bannerTimes} />
          </Banner>
        </UsersVoice>
        <ContactUs>
          <h2>CONTACT US<small>お気軽にお問い合わせください</small></h2> 
          <div className='contact-us-img' />
          <Form id='contact-link'>
            <div className='text-content' >
              <h3>ビジネスの成長を<br />APOLLO SALESが<br />お手伝いします。</h3>
              <p>私たちが提供するサービスは、クラウドサービスになりますが弊社のサポートチームがより効果を実感いただけるよう、全力でサポートします。 営業戦略を成功させるためなら、APOLLO SALESより簡単な方法はありません。導入・質問など、お気軽にご相談ください。</p>
              <p className='sign' >APOLLO SALES 開発/サポートチーム 一同</p>
            </div>
            <div className='form-content' >
              <h4>APOLLO SALES お問い合わせフォーム</h4>
              <FormList />
              <MediumButton label={'送信する'} href='' />
              <p className='comment'>送信いただいた内容は、弊社<a href='https://dashboard.apolloai.jp/pages/privacy_policy'>プライバシーポリシー</a>に基づき扱われます</p>
            </div>
          </Form>
        </ContactUs>
      </Wrapper>
      <Faq>
        <h2>FAQ <small>よくある質問</small></h2>
        <div className='row'>
          <div className='item'>
            <h4 className='question'>Q.企業情報をどうやって集めてますか？</h4>
            <div className='answer'>
              <p className='text'>インターネット上に公開されている企業の情報を収集した後、営業リストとして最適化し、ご提供しております。</p>
            </div>
          </div>
          <div className='item'>
            <h4 className='question'>Q.利用料金はいくらですか？</h4>
            <div className='answer'>
              <p className='text'>月額数万円〜の非常にリーズナブルな料金形態となっております。 ご契約期間等により、月額費用が変動しますので、詳細は弊社までお問い合わせください。 支払い方法は一括払い・毎月払いなど柔軟に対応しております。</p>
            </div>
          </div>
          <div className='item'>
            <h4 className='question'>Q.サポート体制を教えてください</h4>
            <div className='answer'>
              <p className='text'>ご利用開始からスムーズに運用頂けるよう、専任担当者をアサインさせて頂き、導入コンサルティングを行なっております。 操作方法からアポイント取得に効果的な営業メール文面のご提案など、成果にフォーカスしたサポートをさせて頂いております。</p>
            </div>
          </div>
          <div className='item'>
            <h4 className='question'>Q.「お問い合わせ」をすると、しつこく営業されたりしませんか？</h4>
            <div className='answer'>
              <p className='text'>サービス詳細のご説明やご検討状況のヒアリングをさせて頂く場合はございますが、しつこい営業をすることはありません。安心してお問い合わせください。</p>
            </div>
          </div>
          <div className='item'>
            <h4 className='question'>Q.申し込みから導入までどのくらいの期間が掛かりますか？</h4>
            <div className='answer'>
              <p className='text'>お申込みの翌1日または16日が利用開始日となります。お申込み後は、送信するリストの選定、文章の設定、送信のみですので最短で翌営業日には実施が可能です。</p>
            </div>
          </div>
          <div className='item'>
            <h4 className='question'>Q.テレアポとの併用は可能ですか？</h4>
            <div className='answer'>
              <p className='text'>もちろん可能です。APOLLO SALESで送信されたメールに対して開封した企業名がわかるため、テレアポとの併用でさらに効率的なセールス活動を行うことができます。</p>
            </div>
          </div>
        </div>
      </Faq>
    </>
  )
}

export default Main