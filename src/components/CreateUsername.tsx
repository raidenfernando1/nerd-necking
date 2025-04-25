import React, { useState } from "react";
import { createUsername } from "../store/Supabase";
import styled from "styled-components";

const CreateUsername: React.FC = () => {
  const [username, setUsername] = useState("");

  return (
    <RequestUsername
      onSubmit={(e) => (e.preventDefault(), createUsername(username))}>
      <p>Create a username to get an inbox</p>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button>Create</button>
    </RequestUsername>
  );
};

const RequestUsername = styled.form`
  padding-block: 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  > input {
    padding: 10px;
  }

  > button {
    height: 100%;
    padding: 5px;
  }
`;

export default CreateUsername;
