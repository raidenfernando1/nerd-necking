import React, { useEffect, useState } from "react";
import useAuth from "../context/useAuth";
import {
  checkUsername,
  getUsername,
  countMessages,
  fetchMessages,
} from "../store/Supabase";
import { useNavigate } from "react-router";
import { useData } from "../context/useData";
import Spinner from "../components/Spinner";

const AppListener: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { setUserData } = useData();

  const fetchUsername = async () => {
    let username = "";
    let receiver_id = "";

    const response = await getUsername({
      auth_id: authState.user.id,
    });

    if (response) {
      username = response.username;
      receiver_id = response.receiver_id;
    }

    return { username, receiver_id };
  };

  useEffect(() => {
    const initUser = async () => {
      const userData = await fetchUsername();

      if (!(await checkUsername(authState.user.id))) {
        navigate("/create-username");
        return;
      }

      try {
        setUserData({
          user: {
            username: userData.username,
            receiver_id: userData.receiver_id,
          },
          inboxCount: await countMessages({
            receiver_id: userData.receiver_id,
          }),
          messages: await fetchMessages({
            receiver_id: userData.receiver_id,
          }),
        });

        setLoading(false);
      } catch (error) {
        alert(error instanceof Error ? error.message : "An error occurred");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    initUser();
  }, []);

  return <Spinner isLoading={loading}>{children}</Spinner>;
};

export default AppListener;
