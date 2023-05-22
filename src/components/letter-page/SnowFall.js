import React from 'react'
import Snowfall from 'react-snowfall'
const SnowFall = ({ type }) => {
  const renderType = () => {
    return
  }
  return (
    <Snowfall
      // color='#E29C67'
      snowflakeCount={70}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 11,
      }}
      images={images}
      radius={[15, 25]}
    />
  )
}

export default SnowFall
