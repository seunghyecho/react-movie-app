import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const UlEle = styled.ul`
  margin: 0 auto;
  width: 900px;
  li {
    width: 100%;
    border-bottom: 1px solid #eee;
    > .name {
      position: relative;
      height: 45px;
      line-height: 45px;
      span {
        position: absolute;
        right: 0;
      }
    }
    > .body {
      opacity: 0;
      height: 0;
      line-height: 0;
      transition: all 0.5s;
    }
    .active {
      opacity: 1;
      padding: 10px;
      height: 100px;
      line-height: 1;
      background-color: #eee;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;
export default function Comments() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(result.data);
    })();
  }, []);

  return (
    <UlEle>
      {data.map((item, i) => (
        <Accordion key={i} name={item.name} body={item.body} />
      ))}
    </UlEle>
  );
}
// 각 li toggle스타일 적용하기 위해서는 map 안에 넣지 않도록 하기
export function Accordion({ name, body }) {
  const [toggle, setToggle] = useState(false);
  return (
    <li>
      <div className="name" onClick={() => setToggle(!toggle)}>
        {name}
        <span>{toggle ? "-" : "+"}</span>
      </div>
      <div
        className={toggle ? "active body" : "body"}
        style={{ color: "tomato" }}
      >
        {body}
      </div>
    </li>
  );
}
