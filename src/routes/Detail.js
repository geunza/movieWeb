import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
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
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={details.large_cover_image} alt={details.title} />
          <h2>{details.title}</h2>
          <p
            onClick={() => {
              setDesc((prev) => !prev);
            }}
          >
            {desc
              ? details.description_intro
              : details.genres.map((v) => {
                  return <div>{v}</div>;
                })}
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
