import React, { useEffect } from 'react'
import styled from 'styled-components'

import CrossIcon from '../assets/icons/CrossIcon.svg'
import { flexCenter } from '../styles/styleUtils'

const WithModal = ({ children, closeHandler, modalTitle }) => {
  document.body.style.overflow = 'hidden'

  const keyBindHandler = (event) => {
    if (event.key === 'Escape') {
      closeHandler()
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', keyBindHandler)
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', keyBindHandler)
    }
  }, [])

  return (
    <ModalContainer>
      <ModalDrop onClick={() => closeHandler()} />
      <ModalBody>
        <ModalHeader>
          <h1>{modalTitle}</h1>
          <div
            className='close-container'
            onClick={() => {
              closeHandler()
            }}
          >
            <CrossIcon />
          </div>
        </ModalHeader>
        <div>{children}</div>
      </ModalBody>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) =>
    theme.name === 'dark' ? `rgb(35, 35, 35, 0.5)` : `rgba(0, 0, 0, 0.5)`};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  ${flexCenter()};
`

const ModalBody = styled.div`
  max-width: 80%;
  max-height: 70vh;
  background: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  z-index: 20;
  overflow: scroll;
  position: relative;
`

const ModalHeader = styled.div`
  ${flexCenter({ justifyContent: 'space-between' })};
  height: 50px;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => (theme.name === 'dark' ? theme.text : theme.shade1)};
  border-radius: 8px;
  padding: 0 30px;
  position: sticky;
  top: 0;
  z-index: 1;

  h1 {
    font-family: Outfit;
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }

  .close-container {
    ${flexCenter()};
    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }

    & > svg {
      fill: ${({ theme }) => (theme.name === 'dark' ? theme.text : theme.shade1)};
    }
  }
`

const ModalDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

export default WithModal
