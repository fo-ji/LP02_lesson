import React from 'react'
import styled from 'styled-components'
import featuresPoint1Image from '../assets/images/features-point1.png'
import featuresPoint2Image from '../assets/images/features-point2.png'
import featuresPoint3Image from '../assets/images/features-point3.png'
import Badge from '../components/Badge'

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
  return (
    <>
      <Wrapper>
        <Features>
          <h2>FEATURES<small>APOLO SALES でできること</small></h2>
          <Point>
              <img src={featuresPoint1Image}></img>
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
              <img src={featuresPoint2Image}></img>
          </Point>
          <Point>
              <img src={featuresPoint3Image}></img>
              <div className='textfield'>
              <Badge label={'Point3'} />
                <h3>テレアポの効率を<br />飛躍的に向上させます</h3>
                <p>送ったメールに対して開封した企業がわかるので、 その企業に対してテレアポを行えばアポイントに繋がる確率が飛躍的に向上します。</p>
              </div>
          </Point>
        </Features>
      </Wrapper>
    </>
  )
}

export default Main