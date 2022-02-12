import { Link, Outlet } from "react-router-dom";

export default function Articles() {
  return (
    <>
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
