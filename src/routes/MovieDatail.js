import React from "react";
import "./MovieDetail.css";

class MovieDetail extends React.Component {
  componentDidMount() {
    console.log(this.props); //go,goback,goforward
    const { location, history } = this.props;
    console.log(location.state);

    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;

    if (location.state) {
      return (
        <div className="movie_detail">
          <div className="inner">
            <img src={location.state.poster} alt={location.state.title} />
            <div className="movie_detail_data">
              <h1 className="movie_detail_data__title">
                {location.state.title}
              </h1>
              <h3 className="movie_detail_data__year">{location.state.year}</h3>
              <ul className="movie_detail_data__genres">
                {location.state.genres.map((genre, index) => (
                  <li className="movie_detail_data__genres_genre" key={index}>
                    {genre}
                  </li>
                ))}
              </ul>
              <p className="movie_detail_data__summary">
                {location.state.summary}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default MovieDetail;
