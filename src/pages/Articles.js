import Table from "../component/table/Table";
import { NavLink, Outlet } from "react-router-dom";
import { useMemo } from "react";

export default function Articles() {
  const lists = [
    { id: 1, name: "list1" },
    { id: 2, name: "list2" },
    { id: 3, name: "list3" },
  ];
  const data = useMemo(
    () => [
      {
        id: 1,
        title: "World",
        created_at: "2022-02-22",
      },
      {
        id: 2,
        title: "rocks",
        created_at: "2022-02-22",
      },
      {
        id: 3,
        title: "you want",
        created_at: "2022-02-22",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "번호",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "제목",
        accessor: "title",
      },
      {
        Header: "등록일",
        accessor: "created_at",
      },
    ],
    []
  );
  return (
    <>
      <Outlet />
      <ul>
        {lists.map((list) => (
          <ArticleItem key={list.id} id={list.id} name={list.name} />
        ))}
      </ul>
      <Table columns={columns} data={data} />
    </>
  );
}

export function ArticleItem({ id, name }) {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {name}
      </NavLink>
    </li>
  );
}
