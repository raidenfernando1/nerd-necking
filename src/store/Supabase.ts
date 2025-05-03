import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://udcvdhvicqbycucelyjs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkY3ZkaHZpY3FieWN1Y2VseWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NDYyNzMsImV4cCI6MjA1OTAyMjI3M30.DbEBi5uHSLKbY_ulzNHPGuex7xLcfvQt10Eg8VbeSbY",
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      storage: localStorage,
    },
  }
);

export const supabaseLogin = async (
  type: "google" | "github" | "spotify"
): Promise<string | void> => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: type,
  });
  if (error) {
    console.error("Login error: " + error);
    return "Login error.";
  }
};

export const getUsername = async ({ auth_id }: { auth_id: string }) => {
  const { data, error } = await supabase.rpc("get_user_data", {
    auth_id: auth_id,
  });

  if (error) {
    return "Failed to fetch username.";
  }

  return data;
};

export const checkUsername = async (
  user_id: string
): Promise<string | boolean | undefined> => {
  const { data, error } = await supabase.rpc("check_username", {
    auth_id: user_id,
  });
  if (error) {
    console.error(`Something has gone awry. ${error}`);
  } else {
    return data;
  }
};

export const createUsername = async ({
  username,
  user_id,
}: {
  username: string;
  user_id: string;
}): Promise<string> => {
  if (username.trim().length < 3) {
    return "Minimum of 3 characters for username.";
  }
  if (username.includes(" ")) {
    return "No spaces allowed please.";
  }

  const { data, error } = await supabase.rpc("create_username", {
    username: username,
    user_uuid: user_id,
  });

  if (error) {
    console.error(`Something has gone awry. ${error}`);
  }

  if (!data) {
    return "Error creating username, Try again.";
  }

  return "Username Created! Reloading in 5 seconds.";
};

export const supabaseLogout = async (): Promise<string> => {
  const { error } = await supabase.auth.signOut();
  return !error ? "Logout sucessfully" : "Logout error: " + error;
};

export const countMessages = async ({
  receiver_id,
}: {
  receiver_id: string;
}) => {
  try {
    const { data, error } = await supabase.rpc("count_messages", {
      receiver: receiver_id,
    });

    if (error) {
      console.error("ERROR FETCHING MESSAGE COUNT:", error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
};

export const fetchMessages = async ({
  receiver_id,
}: {
  receiver_id: string;
}) => {
  try {
    const { data } = await supabase.rpc("fetch_messages", {
      receiver: receiver_id,
    });
    return data;
  } catch (err) {
    return "Error fetching messages";
  }
};

export const anonCheckUsername = async ({
  inputUsername,
}: {
  inputUsername: string;
}) => {
  if (inputUsername == undefined) {
    return "Route cant be empty";
  }

  try {
    const { data } = await supabase.rpc("anon_check_username", {
      input_username: inputUsername,
    });

    return data;
  } catch (err) {
    return "Error fetching messages";
  }
};

export const sendMessage = async ({
  message,
  receiver_id,
}: {
  message: string;
  receiver_id: string;
}) => {
  const { data, error } = await supabase
    .from("user_messages")
    .insert([{ message_content: message, receiver_id: receiver_id }])
    .select();

  if (error) {
    console.error("Error inserting message:", error);
    throw error;
  }

  return data;
};

export const anonGetUserData = async ({ username }: { username: string }) => {
  const { data } = await supabase.rpc("anon_get_user_data", {
    input_username: username,
  });

  return data;
};
