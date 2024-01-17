// This file will be used to access the details of the logged-in user
"use client";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const useCurrentUser = () => {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        console.log("hook", user);
        if (error) {
          console.log(error.message);
        } else {
          console.log(user);
          setUser(user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    // Include 'supabase.auth' in the dependency array
    fetchUser();
  }, [supabase.auth]); // <-- Include 'supabase.auth' in the dependency array

  return { user, loading };
};
