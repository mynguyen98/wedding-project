import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import CloseIcon from "../icons/CloseIcon";
export const ImageUpload = ({ icon, maxW, height, desc }) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <div
      className="border-img-dash flex items-center rounded-lg margin-auto pb-2"
      style={{ maxWidth: { maxW }, height: { height } }}
    >
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className=" max-w-sm margin-auto ">
            {!images.length > 0 && (
              <div
                className="flex justify-center"
                onClick={onImageUpload}
                styles={{ cursor: "pointer", zIndex: "5" }}
              >
                {icon}
              </div>
            )}
            {imageList.map((image, index) => (
              <div key={index} className="image-item flex justify-center">
                <div
                  className="relative max-w-fit pb-2 "
                  style={{ height: height }}
                >
                  <div
                    className="absolute top-0 right-0"
                    onClick={() => onImageRemove(index)}
                  >
                    <CloseIcon />
                  </div>
                  <img
                    src={image.data_url}
                    alt=""
                    style={{ maxHeight: "100%" }}
                    onClick={() => onImageUpdate(index)}
                  />
                </div>
              </div>
            ))}
            {!images.length > 0 && (
              <div>
                <p
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "#1045FF",
                  }}
                  onClick={onImageUpload}
                >
                  Thêm một hình ảnh
                </p>

                {desc && <p>({desc})</p>}
              </div>
            )}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
