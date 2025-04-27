import styled from "styled-components";
import Navbar from "../components/Navbar";
import { createUsername } from "../store/Supabase";
import React, { useState } from "react";
import useAuth from "../context/useAuth";
import { useNavigate } from "react-router";
import Spinner from "../components/Spinner";

const CreateUsername = () => {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { authState } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await createUsername({
        username: username,
        user_id: authState.user.id,
      });

      if (
        response.includes("Error") ||
        response.includes("No spaces allowed") ||
        response.includes("Minimum of 3 characters")
      ) {
        setError(response);
      } else {
        setError(response);
        setTimeout(() => {
          navigate("/app");
        }, 5000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Spinner isLoading={isLoading}>
        <CreateContainer>
          <CreateWrapper onSubmit={handleSubmit}>
            <div>
              <p>Please create a username to continue.</p>
              <ErrorMessage>{error}</ErrorMessage>
            </div>
            <input
              placeholder="Enter your desired username."
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
      </Spinner>
    </>
  );
};

export default CreateUsername;

const CreateContainer = styled.main`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  padding-block: 10px;
  margin-top: 10px;
  border-top: 1px solid var(--bd-color);
`;
