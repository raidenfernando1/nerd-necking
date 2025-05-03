import { useParams } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar";

import { useState } from "react";
import MessageListener from "../hooks/MessageListener";

const Message = () => {
  const { username } = useParams();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  return (
    <MessageListener
      routeUsername={username}
      isPassed={(msg: boolean) => setError(msg)}>
      <Container>
        {error ? (
          <p>Username: {username} exists.</p>
        ) : (
          <p>Username: {username} doesnt exist.</p>
        )}
        <Wrapper>
          <MessageArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}></MessageArea>
          <BtnContainer>
            <button type="submit">Send</button>
            <button type="reset">Reset</button>
          </BtnContainer>
          <Navbar
            navItems={[
              { name: "Home", path: "/" },
              { name: "Safety", path: "/safety" },
              { name: "About", path: "/about" },
            ]}
          />
        </Wrapper>
      </Container>
    </MessageListener>
  );
};

export default Message;

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
`;

const MessageArea = styled.textarea`
  height: 60%;
  width: 100%;
  resize: none;
  border: 1px solid var(--bd-color);
  margin-top: 30px;
  background: none;
  outline: none;
  color: var(--text-color);
  padding: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  > button {
    padding: 5px 10px;
    flex-grow: 1;
    text-align: left;
  }
`;
