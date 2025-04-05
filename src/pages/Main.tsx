import styled from "styled-components";
import Home from "./Home";
import Login from "./Login";
import Safety from "./Safety";
import About from "./About";
import App from "./App";

import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { supabase } from "../store/Supabase";
import useAuth from "../context/Auth";

const Container = {
  Layout: styled.main`
    height: 100%;
    color: var(--font-color);
    background-color: var(--bg-color);
    padding-inline: 10%;
  `,
};

const Main = () => {
  const { setAuthState } = useAuth();

  // Checks if a session exists already
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthState(session);
    });

    // Listens for auth state changes ( Login, Logout and Current )
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthState(session);
    });

    // Cleanup to stop listening after operation is done
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Container.Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<App />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container.Layout>
  );
};

export default Main;
