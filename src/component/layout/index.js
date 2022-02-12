import { Outlet } from "react-router-dom";
import styled from "styled-components";
const LayoutEle = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
export default function Layout() {
  return (
    <LayoutEle id="layout">
      <Outlet />
    </LayoutEle>
  );
}
