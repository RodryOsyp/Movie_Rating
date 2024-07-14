import React from "react";
import ReactPlayer from "react-player";
import useSWR from "swr";
import { fetcher } from "../../utils/fecher";
import styles from "./Player.module.css"

const Player = ({ id }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=af44ef67727f0f456505285ddf304b31&language=ru-RU`,
    fetcher
  );

  console.log(data);
  const youTubeLink = `https://www.youtube.com/watch?v=${data?.results[0].key}`
  return (        
      <ReactPlayer url={youTubeLink}  className={styles.player}/>
  );
};

export default Player;
