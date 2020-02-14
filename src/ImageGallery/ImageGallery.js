import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

function ImageGallery({ pictures, onSetLargeImage }) {
  return (
    <ul className={styles.ImageGallery}>
      {pictures.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL} 
          largeImageURL={largeImageURL} 
          onSetLargeImage={() => onSetLargeImage(largeImageURL)}
        />
      ))}
    </ul>
  );
}



ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired
    })
  ).isRequired,
  onSetLargeImage: PropTypes.func.isRequired
};

export default ImageGallery;
