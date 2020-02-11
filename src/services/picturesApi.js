import axios from "axios";

// 15179211-2a517f8cf9a714a01a74fe1df

const fetchPicturesByQuery = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=14239053-7da15a6cef2814c1860b92e83&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
};

export default {
  fetchPicturesByQuery
};
