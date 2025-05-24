import { useParams } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { sendMessage } from "../store/Supabase";
import { useState, useEffect } from "react";
import MessageListener from "../hooks/MessageListener";
import { useAnonData } from "../context/useAnonData";

const Message = () => {
  const { username } = useParams();
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [sendError, setSendError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [cooldown, setCooldown] = useState<boolean>(false);
  const [cooldownTime, setCooldownTime] = useState<number>(0);

  const { anonUserData } = useAnonData();

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (cooldown && cooldownTime > 0) {
      timer = setTimeout(() => {
        setCooldownTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (cooldownTime === 0 && cooldown) {
      setCooldown(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [cooldown, cooldownTime]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [successMessage]);

  const handleSendMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!message.trim()) {
      setSendError("Message cannot be empty");
      return;
    }

    if (!anonUserData.receiverID) {
      setSendError("Cannot send message: Receiver ID not found");
      return;
    }

    if (message.trim().length > 10) {
      setSendError("Message too long!");
      return;
    }

    if (cooldown) {
      setSendError(
        `Please wait ${cooldownTime} seconds before sending another message`
      );
      return;
    }

    setSending(true);
    setSendError("");

    try {
      await sendMessage({
        message: message.trim(),
        receiver_id: anonUserData.receiverID,
      });

      setMessage("");
      setSuccessMessage(`Message sent successfully to ${username}!`);
      setSendError("");

      setCooldown(true);
      setCooldownTime(5);
    } catch (err: any) {
      setSendError(`Failed to send message: ${err.message}`);
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setMessage("");
    setSendError("");
  };

  return (
    <MessageListener
      routeUsername={username}
      isPassed={(msg: boolean) => setError(msg)}>
      <Container>
        {!error ? (
          <p>Username: {username} doesn't exist.</p>
        ) : (
          <p>Username: {username} exists.</p>
        )}
        <Wrapper>
          <MessageArea
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            placeholder="Type your message here..."
            disabled={sending || cooldown}></MessageArea>

          {sendError && <ErrorMessage>{sendError}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

          <BtnContainer disabled={sending || cooldown}>
            <button
              type="submit"
              onClick={handleSendMessage}
              disabled={sending || cooldown}>
              {sending
                ? "Sending..."
                : cooldown
                ? `Wait ${cooldownTime}s`
                : "Send"}
            </button>
            <button
              type="reset"
              onClick={handleReset}
              disabled={sending || cooldown}>
              Reset
            </button>
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

  @media (max-width: 500px) {
    width: 100%;
  }
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

interface BtnContainerProps {
  disabled?: boolean;
}

const BtnContainer = styled.div<BtnContainerProps>`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  > button {
    padding: 5px 10px;
    flex-grow: 1;
    text-align: left;
    cursor: pointer;
    opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  }
`;

const ErrorMessage = styled.p`
  color: #ff3333;
  margin: 5px 0;
  font-size: 14px;
`;

const SuccessMessage = styled.p`
  color: #33cc33;
  margin: 5px 0;
  font-size: 14px;
`;
