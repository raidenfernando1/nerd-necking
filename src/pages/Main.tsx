import styled from "styled-components";
import Home from "./Home";
import Login from "./Login";
import Safety from "./Safety";
import About from "./About";
import App from "./App";
import Message from "./Message";

import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { supabase } from "../store/Supabase";
import useAuth from "../context/useAuth";
import CreateUsername from "./CreateUsername";

const Main = () => {
  const { setAuthState } = useAuth();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthState(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthState(session);
    });

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
        <Route path="/create-username" element={<CreateUsername />} />
        <Route path="/:username" element={<Message />} />
      </Routes>
    </Container.Layout>
  );
};

const Container = {
  Layout: styled.main`
    height: 100%;
    color: var(--font-color);
    background-color: var(--bg-color);
    padding-inline: 10%;
  `,
};

export default Main;
