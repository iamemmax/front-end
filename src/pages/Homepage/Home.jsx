import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Search from "../../component/Header/Search";
// import Banner from "../../component/Homepage/Banner";
// import Loading from "../../component/config/Loading";
import { getMovies } from "../../features/Product/fetchMovieSlice";
import { getSeries } from "../../features/Product/fetchShow";
import DisplayMovies from "../../component/Homepage/DisplayMovies";
import "../../component/Homepage/style/movies.scss";
// import { AiOutlineSearch } from "react-icons/ai";
const Home = () => {
  const [input, setInput] = useState("");
  // const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    setInput(e.target.value);
    dispatch(getMovies(input));
    dispatch(getSeries(input));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies("harry potter"));
    dispatch(getSeries("king"));
  }, [dispatch]);

  let { isLoading, movies } = useSelector((state) => state.movies);
  let { loading, show } = useSelector((state) => state.series);

  return (
    <div className="container">
      <Container>
        {/* <Banner /> */}

        <div>
          <Typography variant="h6" paddingTop={10}>
            Search
          </Typography>
          {/* <form onS> */}
          <input type="text" onChange={handleSearch} />
          {/* <AiOutlineSearch /> */}
          {/* </form> */}
        </div>

        {isLoading ? (
          <p>loading ...</p>
        ) : (
          <>
            <Typography variant="h6" paddingTop={5} marginLeft={0}>
              Movies
            </Typography>
            <div className="movies">
              <Grid container spacing={2}>
                {movies?.Search?.map((movie) => (
                  <Grid item xs={6} sm={4} md={3} lg={2}>
                    <DisplayMovies movie={movie} key={movie.imdbID} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </>
        )}

        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            <Typography
              variant="h6"
              paddingTop={5}
              paddingBottom={5}
              marginLeft={0}
            >
              Series
            </Typography>
            <div className="series">
              <Grid container spacing={2}>
                {show?.Search?.map((movie) => (
                  <Grid item xs={6} sm={4} md={3} lg={2}>
                    <DisplayMovies movie={movie} key={movie.imdbID} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Home;
