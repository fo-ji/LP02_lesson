import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/logo.svg'

const Footer = () => {

  const Wrapper = styled.div`
    background-color: #001A51;
    color: #FFFFFF;
    padding: 0 60px;
    font-size: 18px;
    .container {
      padding-top: 65px;
      padding-bottom: 100px;
      width: 85%;
      margin: 0 auto;
    }
    .container .header {
      margin-bottom: 30px;
    }
    .container .header img {
      height: 35px;
    }
    .container .row {
      display: flex;
    } 
    .container .row .links {
      padding-right: 120px;
    } 
    .container .row .links p {
      margin: 19px 0;
    } 
    .container .row .links ul {
      font-size: 16px;
    }
    .links ul > li {
      margin-bottom: 18px;
    }
    .container .row .profile {
      margin-left: 130px;
    }
    .container .row .profile ul {
      font-size: 16px;
    }
    .profile ul > li {
      margin-bottom: 12px;
    }
    .profile ul > li > a:hover {
      text-decoration: underline;
    }
    .copy-right {
      margin-top: 5px;
      font-size: 11.9px;
      color: #BEBEBE;
    }
  `

  return (
    <Wrapper>
      <div className='container'>
        <div className='header'>
          <img src={Logo} alt='ロゴ' />
        </div>
        <div className='row'>
          <div className='links'>
            <p>運営会社</p>
            <ul>
              <li>
                <a href="https://www.onion.co.jp/">会社情報</a>
              </li>
              <li>
                <a href="https://open.talentio.com/1/c/onion/requisitions/368">採用情報</a>
              </li>
            </ul>
          </div>
          <div className='links'>
            <p>重要事項</p>
            <ul>
              <li>
                <a href="https://dashboard.apolloai.jp/pages/terms_of_service">利用規約</a>
              </li>
              <li>
                <a href="https://dashboard.apolloai.jp/pages/privacy_policy">プライバシーポリシー</a>
              </li>
              <li>
                <a href="https://dashboard.apolloai.jp/pages/legal">特定商取引に基づく表記</a>
              </li>
            </ul>
          </div>
          <div className='profile'>
            <ul>
              <li>開発元：株式会社 Onion</li>
              <li>〒150-0002</li>
              <li>東京都渋谷区渋谷2-6-11 花門ビル 3F</li>
              <li>電話番号：<a href="tel:03-4405-2075">03-4405-2075</a></li>
              <li>営業時間：11:00-17:00</li>
            </ul>
          </div>
        </div>
        <p className='copy-right'>© Onion Inc. All Rights Reserved.</p>
      </div>
    </Wrapper>
  )
}

export default Footer