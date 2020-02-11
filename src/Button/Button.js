import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ onFetchPictures }) {
  return (
    <button className={styles.Button} type="button" onClick={onFetchPictures}>
      Load more
    </button>
  );
}
Button.propTypes = {
  onFetchPictures: PropTypes.func.isRequired
};

export default Button;
