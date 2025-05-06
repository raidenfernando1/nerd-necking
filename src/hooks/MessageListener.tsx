import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "../components/Spinner";
import { anonGetUserData } from "../store/Supabase";
import { useAnonData } from "../context/useAnonData";
import ErrorPage from "../pages/ErrorPage";

const MessageListener: React.FC<{
  children: React.ReactNode;
  routeUsername: string | undefined;
  isPassed: (msg: boolean) => void;
}> = ({ children, routeUsername, isPassed }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { setAnonUserData } = useAnonData();

  useEffect(() => {
    if (routeUsername === undefined) return;

    const initAnonUser = async () => {
      const userData = await anonGetUserData({ username: routeUsername });

      if (userData["error"]) {
        setError("This username doesn't exist.");
        isPassed(false);
        setLoading(false);
        return;
      }

      try {
        setAnonUserData({
          anonUserData: {
            username: userData.username,
            receiverID: userData.receiver_id, // This is the key change
          },
        });
        setLoading(false);
        isPassed(true);
      } catch (error) {
        console.error("ERROR: " + error);
        navigate("/");
      }
    };

    initAnonUser();

    return () => {
      setAnonUserData({
        anonUserData: {
          username: "",
          receiverID: "",
        },
      });
    };
  }, []);

  if (loading) {
    return <Spinner isLoading={true}>{children}</Spinner>;
  }

  if (error) {
    return <ErrorPage errorMessage={error} />;
  }

  return <>{children}</>;
};

export default MessageListener;
