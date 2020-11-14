import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/images/background-image.png'
import headerLogo from '../assets/images/header-logo.svg'
import headerImage from '../assets/images/header-image.png'
import SmallButton from '../components/SmallButton'
import LargeButton from '../components/LargeButton'

const Header = () => {

  const Wrapper = styled.div`
    background-color: #0030A0;
    background-image: url(${backgroundImage});
    color: #FFFFFF;
    min-height: 720px;
    margin-bottom: 200px;
    padding: 60px 0 20px;
    width: 100%;
  `

  const NavBar = styled.div`
    display: flex;
    padding: 0 40px;
    width: 100%;
    h1 {
      font-size: 68px;
      margin: 0 auto 0 0;
    }
    h1 > a > img {
      height: 45px;
    }
    nav {
      line-height: 70px;
    }
    ul {
      display: flex;
    }
    ul > li {
      margin: 20px;
      font-weight: bold;
    }
    ul > li > a:hover {
      text-decoration: underline;
    }
  `

  const Container = styled.div`
    display: flex;
    padding: 0 40px;
    width: 100%;
  `

  const TextArea = styled.div`
    width: 65%;
    h2 {
      font-size: 67px;
      margin: 40px 0 30px 0;
      font-weight: bold;
    }
    p {
      font-size: 17px;
      font-weight: bold;
      margin: 50px 0 30px 0;
      line-height: 2em;
      padding: 18px;
      width: 80%;
    }
    p > small {
      display: block;
      font-size: 70%;
      text-align: right;
    }
    p > a {
      display: block;
      margin-top: 50px;
    }
  `

  const ImageArea = styled.div`
    width: 35%;
  `

  return (
    <>
      <Wrapper>
        <NavBar>
          <h1>
            <a href='http://localhost:3000/'>
              <img src={headerLogo} width={'100%'}></img>
            </a>
          </h1>
          <nav>
            <ul>
              <li><a href='http://localhost:3000/'>トップ</a></li>
              <li><a>導入事例</a></li>
              <li><a>使い方と機能</a></li>
              <li><SmallButton label={'お問い合わせ'} href='' /></li>
            </ul>
          </nav>
        </NavBar>
        <Container>
          <TextArea>
            <h2>営業リスト作成だけでなく、<br />メール・フォーム配信まで<br />一括でできる</h2>
            <p>
              新規営業に必要なリスト作成。 通常であればリストを購入または作成を外注、手作業で作成が必要になりますが、 APOLLO SALESは100万リストの中から条件でリスト作成ができ、メール配信まで一括でできるツールです。 さらに、メールを読んで連絡がくる成約感度の高い返信の50%は役員クラスから。 一流の営業マンに負けない、効率の良い営業力を御社に提供します。
              <small>2018年11月 当社でAPOLLO SALSESを使用した実績です。</small>
              <LargeButton label={'お問い合わせはこちらから'} href='' />
            </p>
          </TextArea>
          <ImageArea>
            <img src={headerImage} width={'100%'}></img>
          </ImageArea>
        </Container>
      </Wrapper>
    </>
  )
}

export default Header