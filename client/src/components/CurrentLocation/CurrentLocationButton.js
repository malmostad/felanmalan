import React, { useEffect, useState } from 'react'
import { StyledFetchButton } from '../styles/buttons/Buttons'
import { FiNavigation as NavIcon } from 'react-icons/fi'
import useCurrentLocation from '../CurrentLocation/useCurrentLocation'

const CurrentLocationButton = () => {
  location = useCurrentLocation()
  const getLocation = () => {
    location
  }

  return (
    <>
      <StyledFetchButton onClick={getLocation}>
        <NavIcon
          size="1.4rem"
          style={{ color: 'white', marginTop: '5px', transform: 'rotate(-20deg)' }}
        />
      </StyledFetchButton>
    </>
  )
}

export default CurrentLocationButton
