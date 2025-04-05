import styled from "styled-components";
import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCards";
import useRedirect from "../hooks/useRedirect";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../context/Auth";

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
  useRedirect("/app");

  return (
    <Container.Container>
      <h1>LOGIN NOW</h1>
      <Container.LoginCards>
        <LoginCard
          logo="github"
          name="Login using Github."
          loginProvder="github"
        />
        <LoginCard
          logo="google"
          name="Login using Google."
          loginProvder="google"
        />
        <LoginCard
          logo="spotify"
          name="Login using Spotify."
          loginProvder="spotify"
        />
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
