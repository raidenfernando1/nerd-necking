import styled from "styled-components";
import ProtectedRoute from "../hooks/ProtectedRoute";
import Navbar from "../components/Navbar";

import { supabaseLogout, fetchMessages } from "../store/Supabase";
import AppListener from "../hooks/AppListener";
import { useEffect } from "react";
import useAuth from "../context/useAuth";
import { useData } from "../context/useData";

const App = () => {
  const { authState } = useAuth();
  const { username, receiverID } = useData();

  return (
    <ProtectedRoute>
      <AppListener>
        <Container>
          <button onClick={() => fetchMessages({ receiver_id: receiverID })}>
            test
          </button>
          <Greeting>
            {username ? <p>Hello, {username}</p> : <p>Loading...</p>}
            <p>Here are messages sent to you.</p>
          </Greeting>
          <Messages>
            <MessagesList></MessagesList>
          </Messages>
          <Navbar
            marginTop={0}
            buttonItems={[
              {
                name: "Logout",
                onClick: () => supabaseLogout(),
              },
              {
                name: "Delete Account",
                onClick: () => console.log("Delete Account Clicked"),
              },
            ]}
          />
        </Container>
      </AppListener>
    </ProtectedRoute>
  );
};

export default App;

const Container = styled.div`
  height: 100dvh;
  padding-block: 8%;
  display: flex;
  flex-direction: column;
`;
const Messages = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const Greeting = styled.div`
  padding-block: 10px;
  border-bottom: 1px solid var(--bd-color);
`;

const MessagesList = styled.ul`
  padding-block: 30px;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  gap: 20px;
`;
