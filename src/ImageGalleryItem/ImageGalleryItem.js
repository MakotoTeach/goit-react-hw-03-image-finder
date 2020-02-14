import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ webformatURL, onSetLargeImage }) {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={onSetLargeImage}
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
