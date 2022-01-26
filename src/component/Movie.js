import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieEle = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-color: #000;
`;
const ImgArea = styled.div`
  width: 100%;
  height: 100%;
`;
const InfoArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #efefef;
  background-color: rgba(0, 0, 0, 0.7);

  h1 {
    color: #fff;
  }

  .title,
  .summary {
    text-overflow: ellipsis;
    width: 280px;
    height: 50px;
    overflow: hidden;
    white-space: nowrap;
  }

  .d-flex {
    display: flex;
    justify-content: space-between;
  }
`;
export default function Movie({
  id,
  image,
  genres,
  title,
  summary,
  rating,
  year,
}) {
  return (
    <MovieEle>
      <ImgArea className="imag">
        <img src={image} alt={title} />
      </ImgArea>
      <InfoArea className="info">
        <span>{genres}</span>
        <h1 className="title">
          <Link to={`/detail/${id}`}>{title}</Link>
        </h1>
        <p className="summary">{summary}</p>
        <div className="d-flex">
          <span>{rating}</span>
          <span>{year}</span>
        </div>
      </InfoArea>
    </MovieEle>
  );
}
