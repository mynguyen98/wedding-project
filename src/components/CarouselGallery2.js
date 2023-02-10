import React from 'react'
import { galleryImageCarousel } from '../utils/gallery-data'
import { Carousel } from 'react-carousel-minimal'
const CarouselGallery2 = ({ index }) => {
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <div
        // style={{
        //   padding: '0 20px',
        // }}
        >
          <Carousel
            data={galleryImageCarousel}
            automatic={false}
            width='500px'
            height='800px'
            radius='0px'
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition='bottom'
            dots={true}
            pauseIconColor='white'
            pauseIconSize='40px'
            slideBackgroundColor='darkgrey'
            slideImageFit='cover'
            thumbnails={true}
            thumbnailWidth='100px'
            style={{
              textAlign: 'center',
              width: '100%',
              height: '100%',
              margin: '40px auto',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CarouselGallery2
