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

export const getUsername = async (auth_id: string): Promise<string | null> => {
  const { data, error } = await supabase.rpc("get_username", {
    auth_id: auth_id,
  });

  if (error) {
    console.error(`Something has gone awry. ${error}`);
    return null;
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
