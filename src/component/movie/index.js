import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieEle = styled.div`
  position: relative;
  width: 100%;
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
  color: #efefef;
  background-color: rgba(0, 0, 0, 0.7);

  h1 {
    color: #fff;
    a {
      color: #fff;
    }
  }

  .title,
  .summary {
    text-overflow: ellipsis;
    width: auto;
    height: 50px;
    overflow: hidden;
    white-space: nowrap;
  }

  .d-flex {
    display: flex;
    justify-content: space-between;
  }
`;
const CheckFavorite = styled.div`
  position: absolute;
  left: 5px;

  input {
    appearance: none;
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
  checked,
  onChange,
}) {
  const navigate = useNavigate();
  return (
    <MovieEle>
      <CheckFavorite>
        <label htmlFor={id}>
          <FontAwesomeIcon icon={faStar} color={checked ? "tomato" : "white"} />
        </label>
        <input
          type="checkbox"
          id={id}
          name={id}
          checked={checked}
          onChange={onChange}
        />
      </CheckFavorite>
      <ImgArea className="imag" onClick={() => navigate(`/detail/${id}`)}>
        <img src={image} alt={title} />
      </ImgArea>
      <InfoArea className="info">
        <span>{genres}</span>
        <Link to={`/detail/${id}`}>
          <h1 className="title">{title}</h1>
        </Link>
        <p className="summary">{summary}</p>
        <div className="d-flex">
          <span>{rating}</span>
          <span>{year}</span>
        </div>
      </InfoArea>
    </MovieEle>
  );
}
