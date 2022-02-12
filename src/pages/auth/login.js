import LoginComponent from "../../component/login";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: hsl(235deg 25% 19%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  h1 {
    color: white;
  }
`;
const Position = styled.div`
  width: 427px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default function LogIn() {
  return (
    <Container>
      <Position>
        <h1>Log In</h1>
        <LoginComponent />
      </Position>
    </Container>
  );
}

const users = [
  { email: "kim@test.com", password: "123", name: "Kim" },
  { email: "lee@test.com", password: "456", name: "Lee" },
  { email: "park@test.com", password: "789", name: "Park" },
];

export function SignIn({ email, password }) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user === undefined) throw new Error();
  return user;
}
