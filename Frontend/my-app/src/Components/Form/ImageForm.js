import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import './ImageForm.css';

function ImageForm({ imageUrl }) {
  console.warn("data",imageUrl)
  const [isVisible, setIsVisible] = useState(true);
  const [image1,setImage] = useState(null);
  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDownload = async (imageSrc) => {
    try {
        const response = await fetch(imageSrc);
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }
        console.log(response);
        const imageBlob = await response.blob();
        //const blobOptions = { type: 'image/jpeg' };
        const jpegBlob = new Blob([imageBlob], { type: imageBlob.type });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(jpegBlob);
        console.warn(link);
        link.download = 'image1.jpg'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading image:', error);
    }
};






  useEffect(() => {
    setImage(imageUrl);
  }, [imageUrl]);

  return (
    <>
      {isVisible && (
        <div className="container-upload">
          <button className="close-button-upload" onClick={handleClose}>X</button>
          <div className="upload-container">
            <div className="upload-image-container">
              <h3>Image</h3>
              <div className="image-preview1">
                {image1 ? (
                  <>
                    <img src={image1} alt="Uploaded" className="uploaded-image" />
                  </>
                ) : (
                  <div className="placeholder-image">No image uploaded</div>
                )}
              </div>
            </div>
            <br />
          </div>
          <br />
          <button className="download-button" onClick={() => handleDownload({imageUrl})}>Download</button>
        </div>
      )}
    </>
  );
}

export default ImageForm;