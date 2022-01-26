import styled from "styled-components";
const Layout = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
export default function Body({ children }) {
  return <Layout>{children}</Layout>;
}
