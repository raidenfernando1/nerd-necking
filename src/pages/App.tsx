import styled from "styled-components";
import ProtectedRoute from "../hooks/ProtectedRoute";
import Navbar from "../components/Navbar";
import MessageCard from "../components/MessageCard";

import { supabaseLogout } from "../store/Supabase";
import AppListener from "../hooks/AppListener";
import { useData } from "../context/useData";
const App = () => {
  const { userData } = useData();

  return (
    <ProtectedRoute>
      <AppListener>
        <Container>
          <Greeting>
            {userData.user.username ? (
              <p>Hello, {userData.user.username}</p>
            ) : (
              <p>Loading...</p>
            )}
            {userData.inboxCount ? (
              <p>
                Here are messages sent to you. | Message Count:{" "}
                {userData.inboxCount}
              </p>
            ) : (
              <p>Loading...</p>
            )}
          </Greeting>
          <Messages>
            <MessagesList>
              {userData.messages.map((message) => {
                return (
                  <MessageCard
                    message={message.message_content}
                    timestamp={message.timestamp}
                  />
                );
              })}
            </MessagesList>
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
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
const Greeting = styled.div`
  padding-block: 10px;
  border-bottom: 1px solid var(--bd-color);
`;

const MessagesList = styled.ul`
  padding-block: 30px;
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
