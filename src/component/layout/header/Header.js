import styled from "styled-components";

const HeaderEle = styled.header`
  margin: 0 auto;
  padding: 0 80px;
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

    ul.gnb {
      width: 80%;
      li {
        width: calc(100% / 5);
        justify-content: center;
        a {
          text-transform: uppercase;
          transition: all 0.5s;
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
      width: 20%;
    }
  }
`;
export default function Header() {
  return (
    <HeaderEle>
      <div className="head flex">
        <div className="head--logo">
          <a href="/">
            <h1>Web Logo</h1>
          </a>
        </div>
        <div className="head--util flex">
          <ul className="gnb flex">
            <li className="flex">
              <a href="/">main</a>
            </li>
            <li className="flex">
              <a href="/">schedules</a>
            </li>
            <li className="flex">
              <a href="/">tickets</a>
            </li>
            <li className="flex">
              <a href="/">news</a>
            </li>
            <li className="flex">
              <a href="/">contact</a>
            </li>
          </ul>
          <div className="userCondition">
            <h2>sign out</h2>
          </div>
        </div>
      </div>
    </HeaderEle>
  );
}
