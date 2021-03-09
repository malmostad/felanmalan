import React, { useEffect, useState } from 'react'
import { StyledFetchButton } from '../styles/buttons/Buttons'
import { FiNavigation as NavIcon } from 'react-icons/fi'

const CurrentLocationButton = () => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log('Latitude: ' + pos.coords.latitude + 'Longitude: ' + pos.coords.longitude)
      })
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
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
