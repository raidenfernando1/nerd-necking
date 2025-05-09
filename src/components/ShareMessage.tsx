import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 700px;
  width: 400px;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--bd-color);
`;

const Footer = styled.div`
  border-top: 1px solid var(--bd-color);
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Message = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ShareMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <Container>
      <Message>
        <p>{message}</p>
      </Message>
      <Footer>
        <p>Nerd-Necking</p>
        <p>Send anonymous messages!</p>
      </Footer>
    </Container>
  );
};

export default ShareMessage;
