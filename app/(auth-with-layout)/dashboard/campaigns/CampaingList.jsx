"use client";

import { deleteDBData } from "@/services/supabase.service";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "@/components/Spinner";

export const CampaingList = ({ campaigns, getCampaigns }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const [uiCampaigns, setUiCampaigns] = useState(null);

  useEffect(() => {
    setUiCampaigns(campaigns);
  }, [campaigns]);

  const onSubmit = (data) => {
    if (isValid) {
      if (data.search.length < 3) setUiCampaigns(campaigns);
      else {
        const newCamps = uiCampaigns.filter((camp) =>
          camp.name.includes(data.search)
        );
        setUiCampaigns(newCamps);
      }
    }
  };

  return (
    <ul className="flex flex-col gap-6">
      {/* Search bar */}
      <div className="border-b-[1px]">
        <form
          id="search-campaign"
          className="mb-6 text-slate-500"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-1">
            <input
              className="w-full rounded-l-full border-y-[1px] border-l-[1px] border-slate-200 px-2 py-3 font-normal transition-colors focus:border-slate-400 focus:outline-none"
              type="text"
              placeholder="Enter the campaign name..."
              {...register("search", {
                pattern: {
                  value: /^(?!\d+$).*/,
                  message: "A campaign name can't only be a number",
                },
              })}
            />

            <div className="w-fit">
              <button
                type="submit"
                className="flex flex-shrink justify-center items-center border-[1px] border-slate-200 bg-slate-200 text-white transition-all hover:border-slate-100 hover:bg-slate-100"
              >
                <Image
                  src="/assets/icons/search.icon.svg"
                  alt="search"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* List the campaigns */}
      {uiCampaigns ? (
        uiCampaigns.map((campaign) => (
          <li key={campaign.id} className="flex items-start justify-between">
            <section className="flex gap-6">
              {/* Email preview */}
              <div className="flex h-32 w-32 items-center rounded-md bg-slate-200 text-center">
                Here will go the email preview
              </div>

              {/* Campaign content */}
              <section className="mt-2 flex flex-col items-start">
                <article className="text-2xl font-normal">
                  <h2>{campaign.name}</h2>
                </article>
                <div className="text-slate-500">
                  <h3>{campaign.subject}</h3>
                  <div className="flex flex-col gap-1 lg:flex-row">
                    <h3>{campaign.from_name}</h3>
                    <span className="hidden lg:block">|</span>
                    <h3>{campaign.from_email}</h3>
                  </div>
                </div>
              </section>
            </section>

            {/* Delete campaign button */}
            <div className="hidden gap-[1px] overflow-hidden rounded-lg font-medium text-slate-500 lg:flex">
              <button
                className="bg-slate-200 p-2 transition-colors hover:bg-slate-100"
                onClick={() => {
                  deleteDBData("CAMPAIGNS", "id", campaign?.id);
                  getCampaigns("email");
                  window.location.reload();
                }}
              >
                <Image
                  src="/assets/icons/delete.icon.svg"
                  alt="delete campaign"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </li>
        ))
      ) : (
        <Spinner />
      )}
    </ul>
  );
};
