import { fetchCampaignDetail } from "@/services/supabase.service";
import { useState, useCallback, useMemo } from "react";

export const useCampaignDetail = () => {
  const [campaignData, setCampaignData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCampaign = useCallback(async (campaignID) => {
    try {
      setIsLoading(true);
      const campaign = await fetchCampaignDetail(campaignID);
      setCampaignData(campaign);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const campaign = useMemo(() => campaignData, [campaignData]);

  return { campaign, isLoading, getCampaign, error };
};
