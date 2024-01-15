"use client";

import { useEffect, useState } from "react";
import { CreateSMSForm } from "./CreateSMSForm";
import { SMSList } from "./SMSList";
import { useCampaigns } from "@/hooks/useCampaigns";

const SmsDetails = () => {
  const { campaigns, getCampaigns, error, isLoading } = useCampaigns();

  const [draftSms, setDraftSms] = useState([]);
  const [sentSms, setSentSms] = useState([]);

  const [showingSent, setShowingSent] = useState(false);
  const [showingDraft, setShowingDraft] = useState(true);

  useEffect(() => {
    getCampaigns("sms");
  }, []);

  useEffect(() => {
    // Filtering campaigns based on their status
    const sent = campaigns.filter((campaign) => campaign.status === "sent");
    const drafts = campaigns.filter((campaign) => campaign.status === "draft");

    setSentSms(sent);
    setDraftSms(drafts);
  }, [campaigns]);

  return (
    <>
      <header className="mx-10 py-5 ">
        <div className="flex justify-between">
          <article className="w-full text-center text-2xl font-bold text-ui_primary lg:text-left">
            <h1>SMS Campaign details</h1>
          </article>
          <div className="hidden w-60 lg:block">
            <CreateSMSForm />
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
                ? "border-navyBlue"
                : "border-transparent hover:scale-95"
            }`}
            onClick={() => {
              setShowingSent(true);
              setShowingDraft(false);
            }}
          >
            <div className="flex gap-2 items-center">
              <span>Sent</span>
              <span className="bg-slate-200 py-1 px-2 rounded-md">
                {sentSms.length}
              </span>
            </div>
          </li>

          {/* Draft tab */}
          <li
            className={`flex flex-shrink pb-3 border-b-2 transition-all hover:cursor-pointer  ${
              !showingSent
                ? "border-navyBlue"
                : "border-transparent hover:scale-95"
            }`}
            onClick={() => {
              setShowingDraft(true);
              setShowingSent(false);
            }}
          >
            <div className="flex gap-2 items-center">
              <span>Drafts</span>
              <span className="bg-slate-200 py-1 px-2 rounded-md">
                {draftSms.length}
              </span>
            </div>
          </li>
        </ul>
      </header>

      <section className="mx-10 mt-5 mb-10 bg-white rounded-md p-6">
        {showingSent ? (
          <SMSList smsCampaigns={sentSms} getCampaigns={getCampaigns} />
        ) : (
          <SMSList smsCampaigns={draftSms} getCampaigns={getCampaigns} />
        )}
      </section>
    </>
  );
};

export default SmsDetails;
