import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const DetailEle = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Position = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    margin-right: 50px;
  }
`;
const ImageArea = styled.div`
  width: 20%;
  border-radius: 10px;
  overflow: hidden;
`;
const InfoArea = styled.div`
  width: 50%;
  color: #efefef;

  h1 {
    color: #fff;
  }
`;
export default function Detail() {
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <DetailEle
      style={{ backgroundImage: `url(${movie.background_image_original})` }}
    >
      <Position>
        <ImageArea>
          <img src={movie.large_cover_image} alt={movie.title} />
        </ImageArea>
        <InfoArea>
          <span>{movie.year}</span>
          <h1>{movie.title}</h1>
          <div>
            <span>{movie.genres}</span>
          </div>
          <p>{movie.description_full}</p>
          <span>{movie.rating}</span>
        </InfoArea>
      </Position>
    </DetailEle>
  );
}
