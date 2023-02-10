import React from 'react'
import TitleSection from '../components/TitleSection'
import TitleDescribe from '../components/TitleDescribe'
import calander from '../assets/home-image/calander.svg'
import MapIcon from '../components/icons/MapIcon'
import mapIcon from '../assets/home-image/map-icon.png'
const TimeLocation = () => {
  return (
    <div className='pt-10 pb-10 bg-main-bg section-mb' id='time-location'>
      <div className=' text-center '>
        <TitleSection title='THỜI GIAN & ĐỊA ĐIỂM' />
        <TitleDescribe title='Tháng 2/2023' />
        <div className='flex justify-center'>
          <img src={calander} alt='calander image' />
        </div>
        <h2 className='pt-5 second-text-pink pb-3'>Đón khách lúc 17:00</h2>
        <div className='flex justify-center items-center pb-3'>
          <MapIcon />
          <h2 className='pl-2 m-0 pb-2' style={{ color: 'black' }}>
            Sảnh A, Khách sạn Petro{' '}
          </h2>
        </div>
        <p className='pb-2'>Số 458 Lý Bôn, P. Đề Thám, TP. Thái Bình</p>
      </div>
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.4745980535527!2d106.33459521533923!3d20.445691386317087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e4d0d2edde41%3A0x291534099c8116b3!2sThaiBinh%20Petro%20Hotel!5e0!3m2!1sen!2s!4v1676010733756!5m2!1sen!2s'
          width='100%'
          height='350'
          style={{ border: '0' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div className='flex justify-center pt-6'>
        <button className='btn-map'>
          <img src={mapIcon} alt='' className='gg-map-icon' />
          <a
            href='https://goo.gl/maps/KEKaDGcSzrU4FqLp8'
            className='pl-12 pr-3 py-3 link-map '
          >
            Chỉ đường trên Google Maps
          </a>
        </button>
      </div>
    </div>
  )
}

export default TimeLocation
