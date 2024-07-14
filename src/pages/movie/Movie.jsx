import React from "react";
import styles from "./Movie.module.css";
import useSWR from "swr";
import { fetcher } from "../../utils/fecher";
import Navigation from "../../components/navigation/Navigation";
import { useParams } from "react-router-dom";
import Player from "../../components/Player/Player";
import { PiEmptyBold } from "react-icons/pi";
import { FaBackspace } from "react-icons/fa";
import { NavLink } from "react-router-dom";



const Movie = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <div className={styles.movie}>
        <Navigation />
        <div className={styles.error_box}>
        <div className={styles.error}>You have not selected any movie</div>
        <PiEmptyBold className={styles.icons}/>
        <div className={styles.goBack}>
        <p className={styles.p}>Go Back</p>
        <NavLink to={"/"}>
        <FaBackspace className={styles.back}></FaBackspace>
        </NavLink>
        </div>
        </div>
      </div>
    );
  }

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=af44ef67727f0f456505285ddf304b31&language=ru-RU&page=1`,
    fetcher
  );
  console.log(data);

  if (error) return <div>ошибка загрузки</div>;
  if (!data) return <div>загрузка...</div>;

  const { title, overview, poster_path } = data;
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : null;

  return (
    <div className={styles.movie}>
      <Navigation />
      <div className={styles.box}>
        {posterUrl && (
          <img src={posterUrl} alt={title} className={styles.poster} />
        )}
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.overview}>{overview}</p>
        </div>
      </div>
      <Player id={id}/>
    </div>
  );
};

export default Movie;
