import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid var(--bd-color);
  padding: 10px;

  > p {
    white-space: normal;
    word-wrap: break-word;
    height: 100px;
    overflow: scroll;
    overflow-wrap: break-word;
  }
`;

const MessageAction = styled.button`
  margin-top: 10px;
  padding: 4px 8px;
`;

const MessageCard: React.FC<{ message: string; id?: string }> = ({
  message,
}) => {
  return (
    <Container>
      <p>{message}</p>
      <MessageAction>
        <p>Share</p>
      </MessageAction>
    </Container>
  );
};

export default MessageCard;
