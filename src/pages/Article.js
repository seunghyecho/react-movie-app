import { useParams } from "react-router-dom";

export default function Article() {
  const { id } = useParams();
  return (
    <div>
      <h1>게시글 {id}</h1>
    </div>
  );
}
