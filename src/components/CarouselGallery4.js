import React from 'react'
import { galleryImage } from '../utils/gallery-data'
const CarouselGallery4 = ({ index }) => {
  return (
    <div className='my-carousel'>
      <div>right</div>
      <div>
        <img src={galleryImage[0].imageUrl} alt='' />
      </div>
      <div>left</div>
      <div className='preview-image'>
        {galleryImage.map((image) => {
          return (
            <div>
              <img src={image.imageUrl} alt='' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CarouselGallery4
