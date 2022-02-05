import React from 'react'
import styled from 'styled-components'

import { flexCenter } from '../styles/styleUtils'

const HeaderBubble: React.FC<HeaderBubbleProps> = ({ mainText, secText }) => (
  <HeaderBubbleContainer>
    <MainText>{mainText}</MainText>
    {secText.length !== 0 && <SecText>{secText}</SecText>}
  </HeaderBubbleContainer>
)

type HeaderBubbleProps = {
  mainText?: string
  secText?: string
}

HeaderBubble.defaultProps = {
  mainText: '',
  secText: ''
}

const HeaderBubbleContainer = styled.div`
  background: ${({ theme }) => theme.shade1};
  width: 150px;
  ${flexCenter({ flexDirection: 'column' })}
  padding: 10px;
  border-radius: 8px;
  min-height: 60px;
`

const MainText = styled.p`
  font-family: Outfit;
  font-size: larger;
  font-weight: bold;
  font-size: 16px;
`

const SecText = styled.p`
  font-family: Dongle;
  font-size: larger;
  font-weight: normal;
  font-size: 19px;
  height: 20px;
`

export default HeaderBubble