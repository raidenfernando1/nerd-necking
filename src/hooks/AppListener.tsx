import React, { useEffect } from "react";
import useAuth from "../context/useAuth";
import { checkUsername } from "../store/Supabase";
import { useNavigate } from "react-router";

const AppListener: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const { authState } = useAuth();

  useEffect(() => {
    const isUsername = async () => {
      const response = await checkUsername(authState.user.id);

      if (!response) {
        navigate("/create-username");
      }
    };
    isUsername();
  }, [authState.user.id, navigate]);

  return <>{children}</>;
};

export default AppListener;
