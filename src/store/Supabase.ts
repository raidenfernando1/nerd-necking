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

export const supabaseLogin = async (type: "google" | "github" | "spotify") => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: type,
  });
  if (error) {
    console.error("Login error: " + error);
    return "Login error.";
  }
};

export const supabaseLogout = async () => {
  const { error } = await supabase.auth.signOut();
  return !error ? "Logout sucessfully" : "Logout error: " + error;
};
