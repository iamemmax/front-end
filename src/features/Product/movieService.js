import axios from "axios";

// const ApiKey = process.env.REACT_APP_OMDB_API_KEY;
// const AccessKey = process.env.REACT_APP_OMDB_ACCESS_KEY;

export const fetchMovies = async (data) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?i=tt3896198&apikey=9aa13193&type=movie&s=${data}`
  );
  // console.log(response.data);
  return response.data;
};

export const fetchSeries = async (data) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?i=tt3896198&apikey=9aa13193&type=series&s=${data}`
  );
  console.log(response.data);
  return response.data;
};
