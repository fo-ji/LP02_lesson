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

const Main = () => {

  const Wrapper = styled.div`
    width: 100%;
  `

  const Features = styled.div`
    padding: 0 80px;
    color: #003CAA;
    h2 {
      margin-bottom: 30px;
      overflow: hidden;
      font-size: 118px;
      font-weight: bold;
      line-height: 1em;
    }
    h2 > small {
      margin-left: 40px;
      font-size: 26px;
      font-weight: bold;
      line-height: 1em;
    }
  `

  const Point = styled.div`
    display: flex;
    img {
      width: 50%;
      
    }
    .textfield {
      margin-top: 50px;
      width: 45%;
      margin-left: auto;
    }
    .textfield h3 {
      font-size: 40px;
      font-weight: bold;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    .textfield p {
      font-size: 17px;
      font-weight: bold;
      line-height: 1.8;
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
      small {
        margin-left: 20px;
        font-size: 20px;
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
  `

  const Container = styled.div`
    padding: 0 40px;
    p {
      font-size: 18px;
      line-height: 1.8;
      margin: 60px 0 70px 0;
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
      small {
        margin-left: 20px;
        font-size: 45px;
      }
    }
  `
  // [TODO] 後に修正する ↓
  const SwipeWrapper = styled.div`
    .swipe-thumb {
      width: 100%;
      display: flex;
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
      small {
        margin-left: 20px;
        font-size: 45px;
      }
    }
    .contact-us-img {
      background-image: url(${backgroundContactImage});
      background-size: cover;
      background-repeat: no-repeat;
      height: 523px;
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
      .text-content {
        width: 50%;
        h3 {
          font-size: 42px;
          margin-bottom: 40px;
        }
        p {
          font-size: 17px;
          font-weight: bold;
          line-height: 1.8em;
          margin: 17px 0;
        }
        .sign {
          margin-top: 50px;
          text-align: right;
        }
      }
      .form-content {
        width: 45%;
        h4 {
          font-size: 20px;
          margin-bottom: 30px;
        }
        .comment {
          margin-top: 20px;
          font-weight: normal;
          font-size: 12px;
          a {
            color: #00D0EE;
            text-decoration: underline;
          }
        }
      }
  `

  return (
    <>
      <Wrapper>
        <Features>
          <h2>FEATURES<small>APOLO SALES でできること</small></h2>
          <Point>
              <img src={featuresPoint1Image} />
              <div className='textfield'>
              <Badge label={'Point1'} />
                <h3>簡単に営業リストを<br />作成できる</h3>
                <p>アタックしたい企業の条件を指定すると、APOLLO SALESが インターネット上にある企業情報からリストを作成。 自動で企業リストの収集を行うので、情報収集の手間が省けます。 条件は業種や地域などで指定が可能です。</p>
              </div>
          </Point>
          <Point>
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
          <PointDetail>
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
        <UsersVoice>
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
          <Form>
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
    </>
  )
}

export default Main