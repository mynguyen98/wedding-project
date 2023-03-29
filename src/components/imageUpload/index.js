import React, { useCallback, useState } from "react";
import ImageUploading from "react-images-uploading";
import CloseIcon from "../icons/CloseIcon";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move-e5";
import Languages from "@/commons/Languages";

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
                        className="relative max-w-fit"
                        style={{ height: height }}
                        {...dragProps}
                      >
                        <div
                          className="absolute pointer"
                          onClick={() => onImageRemove(index)}
                        >
                          <CloseIcon />
                        </div>
                        <img
                          src={image.data_url}
                          alt={'thumbs' + image.file?.size}
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
                  className="wrap_imageUploading border-img-dash flex items-center"
                  style={{ maxWidth: maxW, height: height }}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <div className="justify-center">
                    <div className='ImgUploadIcon'>
                      {icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="add_image_uploading">
                      {Languages.text.addonepic}
                    </p>
                    {desc && <p className="desc_image_uploading">{desc}</p>}
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
