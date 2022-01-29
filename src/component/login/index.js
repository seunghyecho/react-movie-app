import styled from "styled-components";
const Form = styled.form`
  > * {
    margin: 20px 0;
  }
  color: white;
  .flex {
    display: flex;
    align-items: center;
  }
  .login-utill {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      color: hsl(350deg 84% 58%);
    }
  }
`;
const InputWrapper = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid hsl(350deg 84% 58%);
  background-color: transparent;
  input {
    color: #fff;
  }
`;
const FormBtn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  color: #fff;
  background-color: hsl(350deg 84% 58%);
`;
export default function LoginComponent({ name, password }) {
  const handleSubmit = (e) => {
    console.log(e);
    window.open("/home");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <label htmlFor="name">{name}</label>
        <input type="text" defaultValue="Username" id="name" />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="password">{password}</label>
        <input type="password" defaultValue="Password" id="password" />
      </InputWrapper>
      <div className="login-utill">
        <div className="flex">
          <input type="checkbox" id="remember" value="" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="button">Forgot Password</button>
      </div>
      <FormBtn type="submit" onClick={handleSubmit}>
        Log In
      </FormBtn>
    </Form>
  );
}
