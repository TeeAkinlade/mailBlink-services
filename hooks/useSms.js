import { readAllDB } from "@/services/supabase.service";
import { useState, useCallback, useMemo } from "react";

export const useSms = () => {
  const [smsData, setSmsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSms = useCallback(async () => {
    try {
      setIsLoading(true);
      const sms = await readAllDB("SMS");
      setSmsData(sms);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sms = useMemo(() => smsData, [smsData]);

  return { sms, isLoading, getSms, error };
};
