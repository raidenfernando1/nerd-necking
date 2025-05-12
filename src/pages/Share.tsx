import React from "react";
import { Link } from "react-router";
import styled from "styled-components";
import ProtectedRoute from "../hooks/ProtectedRoute";

import { useRef } from "react";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    position: absolute;
    left: 0;
  }
`;

const CaptureArea = styled.div`
  padding: 50px;
  border: 1px solid var(--bd-color);
  box-shadow: 0px 0px 30px 1px inset var(--bd-color);
  width: 335px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--bg-color);

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    padding: 50px;
  }
`;

const Footer = styled.div`
  border-top: 1px solid var(--bd-color);
  padding-block: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Message = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > textarea {
    border: none;
    background: none;
    color: inherit;
    resize: none;
    padding: 10px;
    min-height: 200px;
    width: 100%;
  }
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  > button {
    all: unset;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const Share: React.FC<{ message?: string }> = ({ message }) => {
  const captureRef = useRef<HTMLDivElement>(null);

  return (
    <ProtectedRoute>
      <Container>
        <CaptureArea ref={captureRef}>
          <Message>
            <textarea readOnly disabled value={message}></textarea>
          </Message>
          <Footer>
            <h3>Nerd-Necking</h3>
            <p>Send and receive anonymous messages.</p>
          </Footer>
        </CaptureArea>
        <CTA>
          <Link to="/app">Click here to go back</Link>
        </CTA>
      </Container>
    </ProtectedRoute>
  );
};

export default Share;
