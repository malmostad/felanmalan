import {
  StyledTable,
  StyledRow,
  StyledAddImages,
  StyledAddImage,
  StyledCell,
  StyledTouchCharter,
  StyledButtonImage,
  StyledFlexTheContainer,
} from '../../components/styles/containers/Containers'
import PreviewImage from './PreviewImage'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CgMathPlus as OutlinePlus } from 'react-icons/cg'

const Grid = ({ images }) => {
  const [isHover, setIsHover] = useState(false)
  const [gridImages, setGridImages] = useState(images)

  //append new image to grid if added
  useEffect(() => {
    setGridImages(images)
  }, [images])

  const onMouseEnter = () => {
    setIsHover(false)
  }

  const onMouseLeave = () => {
    setIsHover(true)
  }

  return (
    <StyledTouchCharter>
      <StyledTable>
        <StyledFlexTheContainer>
          <StyledRow>
            {images.map((img, index) => (
              <PreviewImage key={index} image={img} />
            ))}{' '}
            <StyledAddImage>
              {isHover ? (
                <StyledButtonImage onMouseEnter={onMouseEnter}>
                  <OutlinePlus
                    size="2.4rem"
                    style={{
                      color: '#046a38',
                      transform: 'scale(1)',
                      transition: 'transform 400ms ease-in',
                    }}
                  />
                </StyledButtonImage>
              ) : (
                <StyledButtonImage onMouseLeave={onMouseLeave}>
                  <OutlinePlus
                    size="2.4rem"
                    style={{
                      color: '#046a38',
                      transform: 'scale(1.4)',
                      transition: 'transform 400ms ease-out',
                    }}
                  />
                </StyledButtonImage>
              )}
            </StyledAddImage>
          </StyledRow>
        </StyledFlexTheContainer>
      </StyledTable>
    </StyledTouchCharter>
  )
}

export default Grid
