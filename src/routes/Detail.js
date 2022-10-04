import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import styles from "./Detail.module.css";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [desc, setDesc] = useState(true);
  const [details, setDetails] = useState([]);
  //https://yts.mx/api/v2/movie_details.json?movie_id=${id}
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading((prev) => !prev);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(details);
  return (
    <div className={styles.detail}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2 className={styles.detail__title}>{details.title}</h2>
          <img
            className={styles.detail__img}
            src={details.large_cover_image}
            alt={details.title}
          />
          <p className={styles.detail__summary}>{details.description_full}</p>
          <ul className={styles.detail__genres}>
            {details.genres.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
