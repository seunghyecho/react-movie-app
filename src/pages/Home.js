import { useEffect, useState } from "react";
import Movie from "../component/Movie";
import styled from "styled-components";

const Container = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    li {
      margin: 5px;
      width: calc(100% / 4 - 10px);
    }
  }
`;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <Container>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Movie
                id={movie.id}
                image={movie.large_cover_image}
                genres={movie.genres}
                title={movie.title}
                summary={movie.summary}
                rating={movie.rating}
                year={movie.year}
              ></Movie>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
