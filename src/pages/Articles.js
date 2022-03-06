import { NavLink, Outlet } from "react-router-dom";
import styled, { css } from "styled-components";
const UlEle = styled.ul`
  margin: 5em auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: fit-content;
  color: white;

  li {
    margin: 0 10px;
  }

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;
export default function Articles() {
  const lists = [
    { id: 1, name: "Posts", url: "posts" },
    { id: 2, name: "Comments", url: "comments" },
    { id: 3, name: "list3", url: "list3" },
  ];

  return (
    <>
      <UlEle>
        {lists.map((list) => (
          <ArticleItem
            key={list.id}
            id={list.id}
            name={list.name}
            url={list.url}
          />
        ))}
      </UlEle>
      <Outlet />
    </>
  );
}

export function ArticleItem({ id, name, url }) {
  const activeStyle = {
    color: "tomato",
    borderBottom: "2px solid tomato",
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${url}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {name}
      </NavLink>
    </li>
  );
}
