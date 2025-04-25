import React, { useEffect } from "react";
import useAuth from "../context/useAuth";
import { useNavigate } from "react-router";

const LoginListener: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigateTo = useNavigate();
  const { authState } = useAuth();

  useEffect(() => {
    if (authState) {
      navigateTo("/app");
    }
  }, [authState, navigateTo]);

  return <>{children}</>;
};

export default LoginListener;
