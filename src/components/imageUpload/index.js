import React from "react";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
export const ImageUpload = ({ icon, uploadText }) => {
  function getImageFileObject(imageFile) {
    console.log({ onAdd: imageFile });
  }
  function runAfterImageDelete(file) {
    console.log({ onDele: file });
  }
  return (
    <div>
      <div>
        <ImageUploader
          onFileAdded={(img) => getImageFileObject(img)}
          onFileRemoved={(img) => runAfterImageDelete(img)}
          uploadIcon={icon}
        />
      </div>
      <a>{uploadText}</a>
    </div>
  );
};
