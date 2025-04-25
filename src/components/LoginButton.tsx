import styled from "styled-components";
import GoogleIcon from "../assets/google.svg?react";
import React from "react";
import { supabaseLogin } from "../store/Supabase";

const iconMap: Record<string, React.FC> = {
  google: GoogleIcon,
};

const LoginButton: React.FC<{
  provider: "google" | "github" | "spotify";
  icon: string;
  name: string;
}> = ({ provider, icon, name }) => {
  const ComponentIcon = iconMap[icon];

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        supabaseLogin(provider);
      }}>
      <ComponentIcon />
      {name}
    </Button>
  );
};

const Button = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default LoginButton;
