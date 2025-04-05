import styled from "styled-components";
import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCards";

const Container = {
  Container: styled.main`
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
  `,
  LoginCards: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
};

const Login = () => {
  return (
    <Container.Container>
      <h1>LOGIN NOW</h1>
      <Container.LoginCards>
        <LoginCard logo="github" name="Login using Github." />
        <LoginCard logo="google" name="Login using Google." />
        <LoginCard logo="spotify" name="Login using Spotify." />
      </Container.LoginCards>
      <Navbar
        navItems={[
          { name: "Exit", path: "/" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
        ]}
      />
    </Container.Container>
  );
};

export default Login;
