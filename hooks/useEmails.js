import { readAllDB } from "@/services/supabase.service";
import { useState, useCallback, useMemo } from "react";

export const useEmails = () => {
  const [emailsData, setEmailsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getEmails = useCallback(async () => {
    try {
      setIsLoading(true);
      const emails = await readAllDB("EMAILS");
      setEmailsData(emails);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const emails = useMemo(() => emailsData, [emailsData]);

  return { emails, isLoading, getEmails, error };
};
