import styled from "styled-components";
import Navbar from "../components/Navbar";
import { createUsername } from "../store/Supabase";
import React, { useState } from "react";
import useAuth from "../context/useAuth";
import { useNavigate } from "react-router";

const CreateUsername = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { authState } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await createUsername({
      username: username,
      user_id: authState.user.id,
    });

    if (response) {
      return setError(response);
    }

    setTimeout(() => {
      navigate("/app");
    }, 5000);
  };

  return (
    <CreateContainer>
      <CreateWrapper onSubmit={handleSubmit}>
        <div>
          <p>Please create a username to continue.</p>
          <ErrorMessage>{error}</ErrorMessage>
        </div>
        <input
          placeholder="Your desired username."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <ButtonContainer>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </ButtonContainer>
      </CreateWrapper>

      <Navbar
        navItems={[
          { name: "Exit", path: "/" },
          { name: "Home", path: "/home" },
          { name: "Contact", path: "/contact" },
        ]}
      />
    </CreateContainer>
  );
};

export default CreateUsername;

const CreateContainer = styled.main`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 30px;
    padding-block: 5px;
    border-bottom: 1px solid var(--bd-color);
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const CreateWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  > button {
    padding: 5px 10px;
  }
`;

const ErrorMessage = styled.p`
  padding-block: 3px;
  margin-top: 10px;
  border-top: 1px solid var(--bd-color);
`;
