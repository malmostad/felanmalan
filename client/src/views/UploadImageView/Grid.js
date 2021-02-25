import { StyledFlexCenter, StyledGrid } from '../../components/styles/containers/Containers'
import PreviewImage from './PreviewImage'
import { useEffect, useState } from 'react'

const Grid = ({ images }) => {
  const [gridImages, setGridImages] = useState(images)

  //append new image to grid if added
  useEffect(() => {
    setGridImages(images)
  }, [images])

  return (
    <StyledFlexCenter>
      <StyledGrid>
        {images.map((img, index) => (
          <PreviewImage key={index} image={img} />
        ))}
      </StyledGrid>
    </StyledFlexCenter>
  )
}

export default Grid
