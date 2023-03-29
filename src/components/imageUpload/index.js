import React, { useCallback, useState } from "react";
import ImageUploading from "react-images-uploading";
import CloseIcon from "../icons/CloseIcon";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move-e5";

export const ImageUpload = ({ icon, maxW, height, desc, maxnumber, allowDrag }) => {

  const [images, setImages] = useState([]);
  const maxNumber = maxnumber || 10;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const onError = () => {
    console.log('Số lượng tối đa ' + maxnumber + ' ảnh')
  };

  const onSortEnd = useCallback((oldIndex, newIndex) => {
    setImages((array) => arrayMove(array, oldIndex, newIndex));
    console.log(images)
  }, [images]);

  return (
    <div className="wrap_box_upload_image_section">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "png", "jpeg", "HEIC"]}
        onError={onError}
      >
        {({

          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          dragProps,

        }) => (
          // write your building UI
          <div className="wrap_box_upload_image_child">

            <SortableList
              onSortEnd={onSortEnd}
              className={'root-remove'}
              draggedItemClassName={'dragged'}
              defaultChecked
              draggable
              hidden
              allowDrag={allowDrag || false}
            >
              {
                imageList.map((image, index) =>
                  <SortableItem key={index} imgProps={{ draggable: false }}>
                    <div className="image-item flex justify-center">
                      <div
                        className="relative max-w-fit pb-2 "
                        style={{ height: height }}
                        {...dragProps}
                      >
                        <div
                          className="absolute top-0 right-0 pointer"
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
                  </SortableItem>
                )
              }
              {
                images.length < maxNumber && <div
                  className="wrap_imageUploading border-img-dash flex items-center rounded-lg pb-2"
                  style={{ maxWidth: maxW, height: height }}
                >
                  <div
                    className="justify-center"
                    onClick={onImageUpload}
                    style={{ cursor: "pointer", zIndex: "5" }}
                    {...dragProps}
                  >
                    <div className='ImgUploadIcon'>
                      {icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <p
                      className="add_image_uploading"
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Thêm một hình ảnh
                    </p>

                    {<p className="desc_image_uploading">{desc}</p>}
                  </div>

                </div>
              }
            </SortableList>

          </div>
        )}
      </ImageUploading>
    </div>
  );
};
