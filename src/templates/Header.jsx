import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/images/background-image.png'
import Logo from '../assets/images/logo.svg'
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
    @media screen and (max-width: 768px) {
      background-image: none;
      padding: 0;
      margin-bottom: 20px;
    }
  `

  const NavBar = styled.div`
    .header {
      display: flex;
      padding: 0 40px;
      width: 100%;
      @media screen and (max-width: 768px) {
        padding: 0;
        margin-top: -30px;
        margin-left: -20px;
      }
    }
    h1 {
      font-size: 68px;
      margin: 0 auto 0 0;
    }
    h1 > a > img {
      height: 45px;
      @media screen and (max-width: 768px) {
        height: 30px;
      }
    }
    nav {
      line-height: 70px;
      @media screen and (max-width: 768px) {
        display: none;
      }
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
    ul > li > .button:hover {
      text-decoration: none;
    }

    #scroll-option.header.is-active {
      color: white;
      background: rgba(0, 0, 0, 0.8);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
      width: 100%;
      @media screen and (max-width: 768px) {
        width: 120%;
      }
    }
  `

  const Container = styled.div`
    display: flex;
    padding: 0 40px;
    width: 100%;
    @media screen and (max-width: 768px) {
      padding: 0 20px;
      flex-direction: column-reverse;
    } 
  `

  const TextArea = styled.div`
    width: 65%;
    @media screen and (max-width: 768px) {
      width: 100%;
    } 
    h2 {
      font-size: 67px;
      margin: 40px 0 30px 0;
      font-weight: bold;
      @media screen and (max-width: 768px) {
        font-size: 40px;
      }  
    }
    p {
      font-size: 17px;
      font-weight: bold;
      margin: 50px 0 30px 0;
      line-height: 2em;
      padding: 18px;
      width: 80%;
      @media screen and (max-width: 768px) {
        font-size: 14px;
        margin: 0;
        width: 100%;
      }  
    }
    p > small {
      display: block;
      font-size: 70%;
      text-align: right;
    }
    p > a {
      display: block;
      margin-top: 50px;
      @media screen and (max-width: 768px) {
        margin-top: 0;
      }  
    }
  `

  const ImageArea = styled.div`
    width: 35%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `

  const ScrollFunction = () => {
    const currentPosition = document.getElementById('scroll-option')
    const currentPositionHeight = window.pageYOffset
    if (currentPositionHeight > 100) {
      currentPosition.classList.add('is-active')
    } else {
      currentPosition.classList.remove('is-active')
    }
  }
  window.onload = function() {
    ScrollFunction()
  }
  window.onscroll = function() {
    ScrollFunction()
  }

  return (
    <>
      <Wrapper>
        <NavBar>
          <div id='scroll-option' className='header'>
            <h1>
              <a href='http://localhost:3000/'>
                <img src={Logo} width={'100%'} />
              </a>
            </h1>
            <nav>
              <ul>
                <li><a href='http://localhost:3000/'>トップ</a></li>
                <li><a href='#user-voice-link'>導入事例</a></li>
                <li><a href='#howto-link'>使い方と機能</a></li>
                <li><a href='#contact-link' className='button'><SmallButton label={'お問い合わせ'} /></a></li>
              </ul>
            </nav>
          </div>
        </NavBar>
        <Container>
          <TextArea>
            <h2>営業リスト作成だけでなく、<br />メール・フォーム配信まで<br />一括でできる</h2>
            <p>
              新規営業に必要なリスト作成。 通常であればリストを購入または作成を外注、手作業で作成が必要になりますが、 APOLLO SALESは100万リストの中から条件でリスト作成ができ、メール配信まで一括でできるツールです。 さらに、メールを読んで連絡がくる成約感度の高い返信の50%は役員クラスから。 一流の営業マンに負けない、効率の良い営業力を御社に提供します。
              <small>2018年11月 当社でAPOLLO SALSESを使用した実績です。</small>
              <a href='#contact-link'><LargeButton label={'お問い合わせはこちらから'} /></a>
            </p>
          </TextArea>
          <ImageArea>
            <img src={headerImage} width={'100%'} />
          </ImageArea>
        </Container>
      </Wrapper>
    </>
  )
}

export default Header