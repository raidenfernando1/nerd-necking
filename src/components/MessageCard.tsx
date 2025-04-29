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

const MessageDetails = styled.div`
  border-top: 1px solid var(--bd-color);
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const ShareBTN = styled.button`
  padding: 5px 10px;
`;

const MessageCard: React.FC<{ message: string; timestamp: string }> = ({
  message,
  timestamp,
}) => {
  const formattedTimestamp = new Date(timestamp).toLocaleString();

  return (
    <Container>
      {!message ? <p>Cant fetch message</p> : <p>{message}</p>}
      <MessageDetails>
        {!timestamp ? <p>No time available</p> : <p>{formattedTimestamp}</p>}
        <ShareBTN>Share</ShareBTN>
      </MessageDetails>
    </Container>
  );
};

export default MessageCard;
