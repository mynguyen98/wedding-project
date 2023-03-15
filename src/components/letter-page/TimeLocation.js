import React from 'react'
import TitleSection from './sub-comp/TitleSection'
import TitleDescribe from './sub-comp/TitleDescribe'
import calander from '../../assets/home-image/calander.svg'
import MapIcon from '../icons/MapIcon'
import mapIcon from '../../assets/home-image/map-icon.png'
import background from '../../assets/home-image/time-schedule-bg.png'
import Calendar from './sub-comp/Calendar'
const TimeLocation = () => {
  const address = `378 Minh Khai, Hai Bà Trưng, Hà Nội`
  const src = `https://maps.google.com/maps?&q="+${address}"&output=embed`
  return (
    <div
      className='pt-10 pb-10 bg-main-bg section-mb layout-mw'
      id='time-location'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className=' text-center '>
        <TitleSection title='THỜI GIAN & ĐỊA ĐIỂM' />
        <div className='pb-2'>
          <h2 className='text-second'>Dạm ngõ</h2>
          <p className='px-28 text-base'>
            Lễ dạm ngõ sẽ diễn tại 378 Minh Khai, vào lúc 12h 00ph, 04/02/2023
          </p>
        </div>
        <div className='pb-2'>
          <h2 className='text-second'>Ăn hỏi</h2>
          <p className='px-28 text-base'>
            Lễ ăn hỏi sẽ diễn tại 378 Minh Khai, vào lúc 10h 00ph, 11/02/2023
          </p>
        </div>
        <div className='pb-2'>
          <h2 className='text-second'>Lê cưới sẽ diễn ra vào lúc</h2>
          <p className='px-28 text-base'>
            Lễ ăn hỏi sẽ diễn tại 378 Minh Khai, vào lúc 10h 00ph, 11/02/2023
          </p>
        </div>
        <Calendar />
        <TitleDescribe title='Tháng 2/2023' />
        <div className='flex justify-center'>
          <img src={calander} alt='calander image' />
        </div>
        <h2 className='pt-5 second-text-pink pb-3'>Đón khách lúc 17:00</h2>
        <div className='flex justify-center items-center pb-5'>
          <MapIcon />
          <h2 className='pl-2 m-0 pb-0 ' style={{ color: 'black' }}>
            Tầng 2, Khách sạn Petro{' '}
          </h2>
        </div>
        <p className='pb-2'>Số 458 Lý Bôn, P. Đề Thám, TP. Thái Bình</p>
      </div>
      <div>
        <iframe
          // src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.4745980535527!2d106.33459521533923!3d20.445691386317087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e4d0d2edde41%3A0x291534099c8116b3!2sThaiBinh%20Petro%20Hotel!5e0!3m2!1sen!2s!4v1676010733756!5m2!1sen!2s'
          src={src}
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
