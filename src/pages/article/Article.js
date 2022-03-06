import { useParams } from "react-router-dom";

export default function Article() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>게시글 {id}</h1>
    </div>
  );
}
