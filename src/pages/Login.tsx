import styled from "styled-components";
import Navbar from "../components/Navbar";
import LoginListener from "../hooks/LoginListener";
import LoginButton from "../components/LoginButton";

const Login = () => {
  return (
    <LoginListener>
      <LoginContainer>
        <h1>LOGIN NOW</h1>
        <InputFields>
          <LoginButton provider="google" icon="google" name="Google" />
        </InputFields>
        <Navbar
          navItems={[
            { name: "Exit", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ]}
        />
      </LoginContainer>
    </LoginListener>
  );
};

export default Login;

const LoginContainer = styled.main`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 30px;
    padding-block: 5px;
    border-bottom: 1px solid var(--bd-color);
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const InputFields = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label > input {
    width: 100%;
  }
`;
