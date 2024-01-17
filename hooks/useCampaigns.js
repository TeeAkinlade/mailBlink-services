import { fetchCampaigns } from "@/services/supabase.service";
import { useState, useCallback, useMemo } from "react";

export const useCampaigns = () => {
  const [campaignsData, setCampaignsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCampaigns = useCallback(async (type) => {
    if(!type) return;

    try {
      setIsLoading(true);
      const campaigns = await fetchCampaigns(type);
      setCampaignsData(campaigns);

      console.log(campaigns)
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const campaigns = useMemo(() => campaignsData, [campaignsData]);

  return { campaigns, isLoading, getCampaigns, error };
};
