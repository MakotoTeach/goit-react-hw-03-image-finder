import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default class Spinner extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Loader type="ThreeDots" color="#7388ff" height={200} width={200} />
      </div>

      // <Loader

      //   type="Watch"
      //   color="#00BFFF"
      //   height={100}
      //   width={100}
      //   timeout={300000} //3 secs
      // />
    );
  }
}
