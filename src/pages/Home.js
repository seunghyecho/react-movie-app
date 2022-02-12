import { useEffect, useState } from "react";
import Movie from "../component/movie";
import styled from "styled-components";
import Search from "../component/search";

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
const LoadEle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #fff;
`;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const [checked, setChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
      setChecked(true);
    } else {
      setCheckedItems(checkedItems.filter((el) => el !== id));
      setChecked(false);
    }
  };

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  const [search, setSearch] = useState("");
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  function Filter(movies) {
    // console.log(movies.filter((word) => word.title.length < 10));
    return movies.filter((item) => {
      return (
        item.title
          .toString()
          .toLowerCase()
          .indexOf(search.toString().toLowerCase()) > -1
      );
    });
  }

  return (
    <Container>
      <Search
        defaultValue={search}
        onChange={handleSearchInput}
        onClick={(e) => {
          console.log(e.currentTarget);
        }}
      />
      {loading ? (
        <LoadEle>
          <h1>Loading...</h1>
        </LoadEle>
      ) : (
        <ul>
          {Filter(movies).map((movie) => {
            return (
              <li key={movie.id}>
                <Movie
                  id={movie.id}
                  image={movie.large_cover_image}
                  genres={movie.genres}
                  title={movie.title}
                  summary={movie.summary}
                  rating={movie.rating}
                  year={movie.year}
                  onChange={(e) => changeHandler(e.target.checked, movie.id)}
                  checked={checkedItems.indexOf(movie.id) >= 0 ? true : false}
                ></Movie>
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
}
