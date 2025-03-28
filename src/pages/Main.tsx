import styled from "styled-components";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Safety from "./Safety";
import About from "./About";

import { Routes, Route } from "react-router";

const Container = {
  Layout: styled.main`
    height: 100%;
    color: var(--font-color);
    background-color: var(--bg-color);
    padding-inline: 10%;
  `,
};

const Main = () => {
  return (
    <Container.Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container.Layout>
  );
};

export default Main;
