import React from "react";

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
      return <h1>{location.state.title}</h1>;
    } else {
      return null;
    }
  }
}
export default MovieDetail;
