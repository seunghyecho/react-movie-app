import { useParams } from "react-router-dom";

export default function Text() {
  let params = useParams();
  return <h2> {params.id}</h2>;
}
