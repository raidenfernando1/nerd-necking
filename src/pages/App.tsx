import styled from "styled-components";
import ProtectedRoute from "../hooks/ProtectedRoute";
import Navbar from "../components/Navbar";
import MessageCard from "../components/MessageCard";
import ConfirmPopup from "../components/ConfirmPopup";
import { deleteUser } from "../store/Supabase";

import { supabaseLogout } from "../store/Supabase";
import AppListener from "../hooks/AppListener";
import { useData } from "../context/useData";
import { useState } from "react";
import { useNavigate } from "react-router";

const App = () => {
  const { userData } = useData();
  const navigateTo = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [error, setError] = useState("");

  return (
    <ProtectedRoute>
      <AppListener>
        <p>{error}</p>
        {confirmDelete && (
          <ConfirmPopup
            isOpen={true}
            onConfirm={async (confirmed) => {
              if (confirmed) {
                try {
                  const result = await deleteUser();
                  if (result.success) {
                    navigateTo("/");
                  }
                } catch (err) {
                  setError(
                    "An error occurred while deleting your account. Please try again."
                  );
                  console.error("Error deleting account:", err);
                }
              } else {
                console.log("Cancelled.");
              }

              setConfirmDelete(false);
            }}
          />
        )}

        <Container>
          <Greeting>
            {userData.user.username ? (
              <p>Hello, {userData.user.username}</p>
            ) : (
              <p>Loading...</p>
            )}
            {userData.inboxCount || userData.inboxCount == 0 ? (
              <p>
                Here are messages sent to you. | Message Count:
                {userData.inboxCount}
              </p>
            ) : (
              <p>Loading...</p>
            )}
          </Greeting>
          <Messages>
            <MessagesList>
              {userData.messages === null ? (
                <p>Empty inbox</p>
              ) : (
                userData.messages.map((message) => {
                  return (
                    <MessageCard
                      message={message.message_content}
                      timestamp={message.timestamp}
                    />
                  );
                })
              )}
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
                onClick: () => setConfirmDelete(true),
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
