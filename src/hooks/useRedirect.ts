import { useEffect } from "react";
import { useNavigate } from "react-router";

import useAuth from "../context/Auth";

const useRedirect = (path: string) => {
  const navigate = useNavigate();
  const { authState } = useAuth();

  useEffect(() => {
    if (authState) {
      navigate(path);
    }
  }, [authState, navigate, path]);
};

export default useRedirect;
