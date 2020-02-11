import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ webformatURL, largeImageURL, onSetLargeImage }) {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onSetLargeImage(largeImageURL)}
    >
      <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onSetLargeImage: PropTypes.func.isRequired
};

export default ImageGalleryItem;
