// SearchPopup.tsx
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

const Popup = styled.form`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--bg-color);
  padding: 1rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;

  > button {
    width: 50%;
    padding: 5px 10px;
    text-align: left;
  }
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SearchPopup = ({ isOpen, onClose }: Props) => {
  const [username, setUsername] = useState("");
  const navigateTo = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateTo(username);
    onClose();
  };

  return (
    <Container>
      <Popup onSubmit={handleSubmit}>
        <p>Send a message to a user?</p>
        <input
          placeholder="Enter username here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <ButtonContainer>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            Exit
          </button>
        </ButtonContainer>
      </Popup>
    </Container>
  );
};

export default SearchPopup;
