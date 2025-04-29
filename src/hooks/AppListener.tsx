import React, { useEffect } from "react";
import useAuth from "../context/useAuth";
import {
  checkUsername,
  getUsername,
  countMessages,
  fetchMessages,
} from "../store/Supabase";
import { useNavigate } from "react-router";
import { useData } from "../context/useData";

const AppListener: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { receiverID, setUsername, setReceiverID, setInboxCount, setMessages } =
    useData();

  // TODO: this Listener HOC is growing too big.
  // FIX LATER: make the calls as custom hooks and call as a single sideeffect.

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await getUsername({ auth_id: authState.user.id });
        if (userData) {
          setUsername(userData.username);
          setReceiverID(userData.receiver_id);
        } else {
          console.error("User data not found.");
        }
      } catch (error) {
        console.error("Error fetching user data: " + error);
      }
    };

    if (authState.user.id) {
      getData();
    }
  }, []);

  useEffect(() => {
    const getMesssageCount = async () => {
      try {
        const messageCount = await countMessages({ receiver_id: receiverID });
        setInboxCount(messageCount);
      } catch (error) {
        console.error("CATCH ERROR: " + error);
      }
    };
    if (receiverID) {
      getMesssageCount();
    }
  }, []);

  useEffect(() => {
    const isUsername = async () => {
      try {
        const response = await checkUsername(authState.user.id);
        if (!response) {
          navigate("/create-username");
        }
      } catch (error) {
        console.error("Error checking username: " + error);
      }
    };

    if (authState.user.id) {
      isUsername();
    }
  }, [authState.user.id, navigate]);

  // --- NEW EFFECT: Fetch all messages ---
  useEffect(() => {
    const getAllMessages = async () => {
      if (!receiverID) return; // Don't fetch if we don't have the ID

      try {
        console.log(`Fetching messages for receiverID: ${receiverID}`); // Debug log
        const fetchedMessages = await fetchMessages({
          receiver_id: receiverID,
        });

        if (fetchedMessages) {
          // Assuming fetchMessages returns MessagesType[] or null/undefined
          console.log(`Fetched ${fetchedMessages.length} messages.`); // Debug log
          setMessages(fetchedMessages); // Update the store
        } else {
          console.log("No messages found or fetch returned null/undefined."); // Debug log
          setMessages([]); // Set to empty array if no messages
        }
      } catch (error) {
        console.error("Error fetching messages: ", error);
        setMessages([]); // Set to empty array on error
      }
    };

    getAllMessages();
  }, [receiverID, setMessages]); // Depend on receiverID and the setter function

  return <>{children}</>;
};

export default AppListener;
