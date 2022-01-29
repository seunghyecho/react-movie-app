import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [log, setLog] = useState();
  const handleLog = (e) => {
    setLog(!log);
  };
  const menus = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "schedules",
    },
    {
      id: 3,
      name: "tickets",
    },
    {
      id: 4,
      name: "news",
    },
    {
      id: 5,
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
                <li
                  className={
                    menu.name === splitLocation[1] ? "flex active" : "flex"
                  }
                  key={idx}
                >
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
