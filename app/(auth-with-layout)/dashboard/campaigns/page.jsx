"use client";

import { useEffect, useState } from "react";
import { CreateCampaignForm } from "./CreateCampaignForm";
import { CampaingList } from "./CampaingList";
import { useCampaigns } from "@/hooks/useCampaigns";

const CampaignsDetails = () => {
  const { campaigns, getCampaigns, error, isLoading } = useCampaigns();
  const [draftCampaigns, setDraftCampaigns] = useState([]);
  const [sentCampaigns, setSentCampaigns] = useState([]);

  const [showingSent, setShowingSent] = useState(false);

  useEffect(() => {
    getCampaigns("email");
  }, [getCampaigns]);

  useEffect(() => {
    // Filtering campaigns based on their status

    const sent = campaigns.filter((campaign) => campaign.status === "sent");
    const drafts = campaigns.filter((campaign) => campaign.status === "draft");

    setSentCampaigns(sent);
    setDraftCampaigns(drafts);
  }, [campaigns]);

  return (
    <>
      <header className="mx-10 ">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Email Campaigns</h1>
            <p className="text-lg text-gray-600">
              View and manage your email campaigns
            </p>
          </div>
          <div className="hidden w-60 lg:block">
            <CreateCampaignForm />
          </div>
        </div>

        {/* Mobile campaign selection */}
        <select id="select-campaign" className="mt-5 md:hidden">
          <option value="draft">Drafts</option>
          <option value="sent">Sent</option>
        </select>

        {/* Desktop campaign selection */}
        <ul className="hidden md:flex gap-6 font-semibold mt-5 border-b-[1px]">
          {/* Sent tab */}
          <li
            className={`flex flex-shrink pb-3 border-b-2 transition-all hover:cursor-pointer  ${
              showingSent
                ? "border-ui_secondary1"
                : "border-transparent hover:scale-95"
            }`}
            onClick={() => {
              setShowingSent(true);
            }}
          >
            <div className="flex gap-2 items-center">
              <span>Sent</span>
              <span className="bg-slate-200 py-1 px-2 rounded-md">
                {sentCampaigns.length}
              </span>
            </div>
          </li>

          {/* Draft tab */}
          <li
            className={`flex flex-shrink pb-3 border-b-2 transition-all hover:cursor-pointer  ${
              !showingSent
                ? "border-ui_secondary1"
                : "border-transparent hover:scale-95"
            }`}
            onClick={() => {
              setShowingSent(false);
            }}
          >
            <div className="flex gap-2 items-center">
              <span>Drafts</span>
              <span className="bg-slate-200 py-1 px-2 rounded-md">
                {draftCampaigns.length}
              </span>
            </div>
          </li>
        </ul>
      </header>

      <section className="mb-10 bg-white rounded-md">
        {showingSent ? (
          <CampaingList campaigns={sentCampaigns} getCampaigns={getCampaigns} />
        ) : (
          <CampaingList
            campaigns={draftCampaigns}
            getCampaigns={getCampaigns}
          />
        )}
      </section>
    </>
  );
};

export default CampaignsDetails;
