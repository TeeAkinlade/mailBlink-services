import { readAllDB } from "@/services/supabase.service";
import { useState, useCallback, useMemo } from "react";

export const useGroups = () => {
  const [groupsData, setGroupsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getGroups = useCallback(async () => {
    try {
      setIsLoading(true);
      const groups = await readAllDB("GROUPS");
      setGroupsData(groups);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const groups = useMemo(() => groupsData, [groupsData]);

  return { groups, isLoading, getGroups, error };
};
