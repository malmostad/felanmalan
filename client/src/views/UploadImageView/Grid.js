import {
  StyledTable,
  StyledRow,
  StyledAddImages,
  StyledAddImage,
  StyledCell,
  StyledTouchCharter,
  StyledButtonImage,
} from '../../components/styles/containers/Containers'
import PreviewImage from './PreviewImage'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CgMathPlus as OutlinePlus } from 'react-icons/cg'

const Grid = ({ images }) => {
  const [gridImages, setGridImages] = useState(images)

  //append new image to grid if added
  useEffect(() => {
    setGridImages(images)
  }, [images])

  return (
    <StyledTouchCharter>
      <StyledTable>
        <StyledRow>
          {images.map((img, index) => (
            <PreviewImage key={index} image={img} />
          ))}
        </StyledRow>
        <StyledAddImage>
          <StyledButtonImage>
            <OutlinePlus size="2.4rem" style={{ color: '#046a38' }} />
          </StyledButtonImage>
        </StyledAddImage>
      </StyledTable>
    </StyledTouchCharter>
  )
}

export default Grid
