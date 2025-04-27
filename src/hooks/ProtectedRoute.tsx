import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../context/useAuth";

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  let navigateTo = useNavigate();
  const { authState } = useAuth();

  useEffect(() => {
    if (authState == null) {
      navigateTo("/");
    }
  }, [authState, navigateTo]);

  if (authState == null) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
