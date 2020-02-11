import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Spinner from "./Loader/Spinner";
import Modal from "./Modal/Modal";
import picturesApi from "./services/picturesApi";

export default class App extends Component {
  state = {
    pictures: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchPictures();
    }
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevPage !== nextPage && prevPage !== 1) {
      this.scrollToBottom();
    }

    if (this.state.largeImage) {
      window.addEventListener("keydown", this.handleKeyDown);
    }
  }

  handleKeyDown = e => {
    // console.log(e);
    if (e.code === "Escape") {
      this.setState({ largeImage: null });
      window.removeEventListener("keydown", this.handleKeyDown);
    }
  };


  fetchPictures = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    picturesApi
      .fetchPicturesByQuery(searchQuery, page)
      .then(pictures =>
        this.setState(prevState => ({
          page: prevState.page + 1,
          pictures: [...prevState.pictures, ...pictures]
        }))
      )

      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({ searchQuery: query, page: 1, pictures: [] });
  };

  setLargeImage = largeImage => {
    this.setState({ largeImage });
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  render() {
    const { pictures, loading, error, largeImage } = this.state;

    return (
      <>
        {largeImage && <Modal largeImage={largeImage} />}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {pictures.length > 0 && (
          <ImageGallery
            pictures={pictures}
            onSetLargeImage={this.setLargeImage}
          />
        )}
        {loading && <Spinner />}
        {pictures.length > 0 && !loading && (
          <Button onFetchPictures={this.fetchPictures} />
        )}
      </>
    );
  }
}
