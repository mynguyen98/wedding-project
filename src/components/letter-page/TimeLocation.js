import React from "react";
import TitleSection from "./sub-comp/TitleSection";
import TitleDescribe from "./sub-comp/TitleDescribe";
import calander from "../../assets/home-image/calander.svg";
import MapIcon from "../icons/MapIcon";
import mapIcon from "../../assets/home-image/map-icon.png";
import background from "../../assets/home-image/time-schedule-bg.png";
import Calendar from "./sub-comp/Calendar";
import CountDown from "./sub-comp/Countdown";
import LazyLoad from "react-lazy-load";
const TimeLocation = () => {
  const address = `378 Minh Khai, Hai Bà Trưng, Hà Nội`;
  const src = `https://maps.google.com/maps?&q="+${address}"&output=embed`;
  return (
    <div
      className="pt-10 pb-10 bg-main-bg section-mb layout-mw"
      id="time-location"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className=" text-center ">
        <TitleSection title="THỜI GIAN & ĐỊA ĐIỂM" />
        <div className="pb-2">
          <h2 className="text-second">Dạm ngõ</h2>
          <p className="max-w-xs text-base margin-auto">
            Lễ dạm ngõ sẽ diễn tại 378 Minh Khai, vào lúc 12h 00ph, 04/02/2023
          </p>
        </div>
        <div className=" pb-2">
          <h2 className="text-second">Ăn hỏi</h2>
          <p className="max-w-xs text-base margin-auto">
            Lễ ăn hỏi sẽ diễn tại 378 Minh Khai, vào lúc 10h 00ph, 11/02/2023
          </p>
        </div>
        <div className="pb-2 border-section-1">
          <h2 className="text-second">Lê cưới sẽ diễn ra vào lúc</h2>
          <p className="max-w-xs text-base margin-auto">
            Lễ ăn hỏi sẽ diễn tại 378 Minh Khai, vào lúc 10h 00ph, 11/02/2023
          </p>
        </div>
        <Calendar />
        {/* <TitleDescribe title='Tháng 2/2023' /> */}
        {/* <div className='flex justify-center'>
          <img src={calander} alt='calander image' />
        </div> */}
        <h2 className="pt-6 second-text-pink pb-3 max-w-xs margin-auto">
          Đám cưới của Việt Anh và Phương Anh sẽ diễn ra sau
        </h2>
        <CountDown />
        <h2 className="pb-6 border-section-1">Ngày</h2>
        <h2 className="text-second">Địa chỉ</h2>
        <p className="margin-auto pb-6 border-section-1 max-w-xs">
          Khách sạn Petro Thái Bình Số 458 Lý Bôn, P. Đề Thám, TP. Thái Bình
        </p>
        {/* <div className='flex justify-center items-center pb-5'>
          <MapIcon />
          <h2 className='pl-2 m-0 pb-0 ' style={{ color: 'black' }}>
            Tầng 2, Khách sạn Petro{' '}
          </h2>
        </div>
        <p className='pb-2'>Số 458 Lý Bôn, P. Đề Thám, TP. Thái Bình</p> */}
      </div>
      <div>
        <LazyLoad height={325} offset={200}>
          <iframe
            src={src}
            width="100%"
            height="350"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </LazyLoad>
      </div>
      <div className="flex justify-center pt-6 mt-2">
        <button className="btn-map">
          <img src={mapIcon} alt="" className="gg-map-icon" />
          <a
            href="https://goo.gl/maps/KEKaDGcSzrU4FqLp8"
            className="pl-12 pr-3 py-3 link-map "
          >
            Chỉ đường trên Google Maps
          </a>
        </button>
      </div>
    </div>
  );
};

export default TimeLocation;
