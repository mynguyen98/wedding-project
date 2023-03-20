import React from "react";
import background from "../../assets/home-image/time-schedule-bg.png";
import manResponse from "@/assets/svg/man-response.svg";
import womanResponse from "@/assets/svg/woman-response.svg";
import { ImageUpload } from "../imageUpload";
import uploadImageIcon from "@/assets/svg/uploadImgIcon.svg";
import ImgUploadIcon from "../icons/ImgUploadIcon";
const Response = () => {
  return (
    <div
      className="layout-mw py-10 text-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="text-main">Thông tin phản hồi</h2>
      <p className="max-w-sm margin-auto pb-6">
        Để thuận tiện cho việc sắp xếp chỗ ngồi, vui lòng phản hồi giúp vợ chồng
        mình nhé!
      </p>
      <div className="flex justify-center gap-10">
        <div className="text-center bg-main rounded-lg border-gray-item-color">
          <div className="py-4 px-6">
            <img
              src={manResponse}
              alt="man response"
              className="margin-auto pb-2"
            />
            <p className="text-white m-0" style={{ color: "white" }}>
              Khách nhà trai
            </p>
          </div>
        </div>
        <div className="text-center bg-white rounded-lg border-gray-item-color">
          <div className="py-4 px-6">
            <img
              src={womanResponse}
              alt="man response"
              className="margin-auto pb-2"
            />
            <p className="text-white m-0">Khách nhà gái</p>
          </div>
        </div>
      </div>
      <ImageUpload icon={<ImgUploadIcon />} />
    </div>
  );
};

export default Response;
