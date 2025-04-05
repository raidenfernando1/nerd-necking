import styled from "styled-components";
import useAuth from "../context/Auth";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Container = {
  Container: styled.div`
    height: 100vh;
    width: 100%;
  `,
};

const App = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState) {
      navigate("/login");
    }
  }, [useState, navigate]);

  return <Container.Container>res</Container.Container>;
};

export default App;
