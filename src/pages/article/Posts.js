import Table from "../../component/table/Table";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
      setData(result.data);
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "번호",
        accessor: "id",
      },
      {
        Header: "제목",
        accessor: "title",
      },
    ],
    []
  );
  return <Table columns={columns} data={data} />;
}
