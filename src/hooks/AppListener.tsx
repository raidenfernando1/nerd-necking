import React, { useEffect } from "react";
import useAuth from "../context/useAuth";
import { checkUsername, getUsername } from "../store/Supabase";
import { useNavigate } from "react-router";
import { useData } from "../context/useData";

const AppListener: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { setUsername, setReceiverID } = useData();

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await getUsername({ auth_id: authState.user.id });
        if (userData) {
          setUsername(userData.username);
          setReceiverID(userData.receiver_id);
        } else {
          console.error("User data not found.");
        }
      } catch (error) {
        console.error("Error fetching user data: " + error);
      }
    };

    if (authState.user.id) {
      getData();
    }
  }, []);

  useEffect(() => {
    const isUsername = async () => {
      try {
        const response = await checkUsername(authState.user.id);
        if (!response) {
          navigate("/create-username");
        }
      } catch (error) {
        console.error("Error checking username: " + error);
      }
    };

    if (authState.user.id) {
      isUsername();
    }
  }, [authState.user.id, navigate]);

  return <>{children}</>;
};

export default AppListener;
