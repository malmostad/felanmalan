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
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { CgMathPlus as OutlinePlus } from 'react-icons/cg'

const Grid = ({ images, handleSingleImages }) => {
  const [gridImages, setGridImages] = useState(images)
  const fileInput = useRef(null)

  //append new image to grid if added
  useEffect(() => {
    setGridImages(images)
  }, [images])

  return (
    <StyledTouchCharter>
      <StyledTable>
        <StyledFlexTheContainer>
          <StyledRow>
            {images.map((img, index) => (
              <PreviewImage key={index} image={img} />
            ))}{' '}
            <StyledAddImage>
              <>
                <input
                  name="images"
                  type="file"
                  id="upload-button"
                  multiple
                  onChange={handleSingleImages}
                  ref={fileInput}
                  style={{ display: 'none' }}
                  accept="image/*"
                />
                <StyledButtonImage onClick={() => fileInput.current.click()}>
                  <OutlinePlus
                    size="2.4rem"
                    style={{
                      color: '#046a38',
                    }}
                  />
                </StyledButtonImage>
              </>
            </StyledAddImage>
          </StyledRow>
        </StyledFlexTheContainer>
      </StyledTable>
    </StyledTouchCharter>
  )
}

export default Grid
