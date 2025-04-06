import styled from "styled-components";
import useAuth from "../context/Auth";
import QuestionCard from "../components/QuestionCard";

import { useNavigate } from "react-router";
import { useEffect } from "react";
import { supabaseLogout } from "../store/Supabase";

const Container = {
  Container: styled.div`
    min-height: 100vh;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  Navbar: styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    padding-inline: 10%;
    width: 100%;
    display: flex;
    padding-block: 20px;
    border-bottom: 1px solid var(--bd-color);
    background-color: var(--bg-color);
    align-items: center;

    gap: 10px;
    align-items: center;

    > button {
      display: flex;
      padding: 5px 0px;
      border: none;
    }

    :last-child {
      margin-left: auto;
    }
  `,
  Questions: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  `,
};

const App = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState) {
      navigate("/login");
    }
  }, [authState, navigate]);

  return (
    <Container.Container>
      <Container.Navbar>
        <button onClick={() => window.location.reload()}>NERD-NECKING</button>
        <button onClick={() => supabaseLogout()}>ANONYMOUS WALL</button>
        <button onClick={() => supabaseLogout()}>LOGOUT</button>
      </Container.Navbar>
      <Container.Questions></Container.Questions>
    </Container.Container>
  );
};

export default App;
