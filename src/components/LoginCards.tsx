import React from "react";
import styled from "styled-components";
import GithubLogo from "../assets/github.svg?react";
import GoogleLogo from "../assets/google.svg?react";
import SpotifyLogo from "../assets/spotify.svg?react";
import { supabaseLogin } from "../store/Supabase";

const Card = {
  Container: styled.button`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  LogoWrapper: styled.div`
    padding: 10px;
    height: 100%;
    border-right: 1px solid var(--bd-color);

    > svg {
      height: 40px;
      width: 40px;
    }
  `,
};

const LogoMap = {
  github: <GithubLogo />,
  google: <GoogleLogo />,
  spotify: <SpotifyLogo />,
};

const LoginCard: React.FC<{
  name: string;
  loginProvder: "github" | "spotify" | "google";
  logo: "github" | "spotify" | "google";
}> = ({ name, loginProvder, logo }) => {
  return (
    <Card.Container onClick={() => supabaseLogin(loginProvder)}>
      <Card.LogoWrapper>{LogoMap[logo] || ""}</Card.LogoWrapper>
      <p>{name}</p>
    </Card.Container>
  );
};

export default LoginCard;
