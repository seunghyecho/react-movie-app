import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderEle = styled.header`
  margin: 0 auto;
  padding: 0 10px;
  height: 100px;
  background-color: transparent;
  .flex {
    display: flex;
    align-items: center;
  }
  .head {
    height: 100%;
    &.flex {
      justify-content: space-between;
    }
  }
  .head--logo {
    width: 20%;
  }
  .head--util {
    width: 100%;
    justify-content: space-between;

    ul.gnb {
      width: 80%;
      li {
        width: calc(100% / 5);
        justify-content: center;

        a {
          text-transform: uppercase;
          transition: all 0.5s;
        }
        &.active {
          color: tomato;
          border-bottom: 2px solid tomato;
        }
        &:hover,
        &:active,
        &:focus {
          a {
            border-bottom: 2px solid tomato;
          }
        }
      }
    }

    .userCondition {
      button {
        text-transform: uppercase;
      }
    }
  }
`;
export default function Header() {
  const [log, setLog] = useState();
  const handleLog = (e) => {
    setLog(!log);
  };
  const menus = [
    {
      name: "home",
    },
    {
      name: "schedules",
    },
    {
      name: "tickets",
    },
    {
      name: "news",
    },
    {
      name: "contact",
    },
  ];

  return (
    <HeaderEle>
      <div className="head flex">
        <div className="head--logo">
          <Link to="/">
            <h1>Web Logo</h1>
          </Link>
        </div>
        <div className="head--util flex">
          <ul className="gnb flex">
            {menus.map((menu, idx) => {
              return (
                <li className={menu.name ? "flex active" : "flex"} key={idx}>
                  <Link to={`/${menu.name}`}>{menu.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="userCondition">
            <h4>
              <button onClick={handleLog}>
                {log ? "sign out" : "sign in"}
              </button>
            </h4>
          </div>
        </div>
      </div>
    </HeaderEle>
  );
}
