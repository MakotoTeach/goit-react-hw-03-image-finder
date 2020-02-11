import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

function Modal({ largeImage }) {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired
};

export default Modal;
