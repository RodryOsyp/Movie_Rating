import React, { useEffect, useState } from "react";
import styles from "./Trend.module.css";
import { NavLink } from "react-router-dom";

const Trend = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [newReleaseMovies, setNewReleaseMovies] = useState([]);
  const [newReleaseSeries, setNewReleaseSeries] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=af44ef67727f0f456505285ddf304b31&language=ru-RU&page=1"
    )
      .then((res) => res.json())
      .then((res) => {
        const movies = res.results;
        const trending = movies.slice(0, 3);
        const newReleases = movies.slice(3, 7);
        const newSeries = movies.slice(7, 10);
        const recommended = movies.slice(10, 20);
        setTrendingMovies(trending);
        setNewReleaseMovies(newReleases);
        setNewReleaseSeries(newSeries);
        setRecommendedMovies(recommended);
        console.log(movies);
      });
  }, []);

  return (
    <div className={styles.trendContainer}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Trending</h2>
        <div className={styles.trend}>
          {trendingMovies.length > 0 ? (
            trendingMovies.map((movie) => (
              <div key={movie.id} className={styles.movie}>
                <NavLink to={`/film/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    className={styles.poster}
                  />
                </NavLink>
                <div className={styles.text}>{movie.original_title}</div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>New Release - Movies</h2>
        <div className={styles.trend}>
          {newReleaseMovies.length > 0 ? (
            newReleaseMovies.map((movie) => (
              <div key={movie.id} className={styles.movie}>
                <NavLink to={`/film/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    className={styles.poster}
                  />
                </NavLink>
                <div className={styles.text}>{movie.original_title}</div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>New Release - Series</h2>
        <div className={styles.trend}>
          {newReleaseSeries.length > 0 ? (
            newReleaseSeries.map((movie) => (
              <div key={movie.id} className={styles.movie}>
                <NavLink to={`/film/${movie.id}`}>
                  {" "}
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    className={styles.poster}
                  />
                </NavLink>
                <div className={styles.text}>{movie.original_title}</div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Recommended</h2>
        <div className={styles.trend}>
          {recommendedMovies.length > 0 ? (
            recommendedMovies.map((movie) => (
              <div key={movie.id} className={styles.movie}>
                <NavLink to={`/film/${movie.id}`}>
                  {" "}
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    className={styles.poster}
                  />
                </NavLink>
                <div className={styles.text}>{movie.original_title}</div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trend;
