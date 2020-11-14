import React from 'react'
import styled from 'styled-components'

const Badge = (props) => {

  const PointBadge = styled.div`
    background-color: #0030A0;
    border-radius: 17px;
    color: #FFFFFF;
    display: inline-block;
    font-size: 17px;
    font-weight: bold;
    padding: 5px 17px;
  `

  return (
    <PointBadge>
      {props.label}
    </PointBadge>
  )
}

export default Badge