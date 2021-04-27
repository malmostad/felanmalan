import {
  StyledTable,
  StyledRow,
  StyledAddImages,
  StyledCell,
} from '../../components/styles/containers/Containers'
import PreviewImage from './PreviewImage'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Grid = ({ images }) => {
  const [gridImages, setGridImages] = useState(images)

  //append new image to grid if added
  useEffect(() => {
    setGridImages(images)
  }, [images])

  return (
    <StyledTable>
      <StyledRow>
        {images.map((img, index) => (
          <PreviewImage key={index} image={img} />
        ))}
        <StyledCell>
          <StyledAddImages>Lägg till bild</StyledAddImages>
          <h1>hhej</h1>
        </StyledCell>
      </StyledRow>
    </StyledTable>
  )
}

export default Grid
