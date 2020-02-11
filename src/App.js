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
    page: 0,
    largeImage: null
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchPictures();
    }

    if (this.state.page !== 1) {
      this.scrollToBottom();
    }
  }

  closeModal = () => {
    this.setState({ largeImage: null });
  };

  fetchPictures = () => {
    const { searchQuery, page } = this.state;
    const currentPage = page + 1;
    this.setState({ loading: true, page: currentPage });

    picturesApi
      .fetchPicturesByQuery(searchQuery, currentPage)
      .then(pictures =>
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures]
        }))
      )

      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({ searchQuery: query, page: 0, pictures: [] });
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
        {largeImage && (
          <Modal onClose={this.closeModal} largeImage={largeImage} />
        )}
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
