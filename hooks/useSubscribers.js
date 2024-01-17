import { readAllDB } from "@/services/supabase.service";
import { useState, useCallback, useMemo } from "react";

export const useSubscribers = () => {
  const [subscribersData, setSubscribersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSubscribers = useCallback(async () => {
    try {
      setIsLoading(true);
      const subscribers = await readAllDB("SUBSCRIBERS");
      setSubscribersData(subscribers);

      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const subscribers = useMemo(() => subscribersData, [subscribersData]);

  return { subscribers, isLoading, getSubscribers, error };
};
