"use client";

import {
  readRelatedGroups,
  readRelatedSMS,
  updateCampaignStatus,
} from "@/services/supabase.service";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SMSCampaignPreview = () => {
  const router = useRouter();
  const { smsID } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [sms, setSms] = useState(null);
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const getPreview = async () => {
      await readRelatedSMS(smsID).then((camp) => {
        setCampaign(camp[0]);
        setSms(camp[0].SMS[0]);
      });

      await readRelatedGroups(smsID).then((group) => {
        setGroup(group[0].GROUPS[0]);
      });
    };
    getPreview();
  });

  const sendCampaign = async () => {
    // console.log(campaign, email, group);

    const data = {
      //For now it can only send to the test phone (Awaiting approval in AWS)
      recipientsPhone: ["+5491164160296"],
      sms: sms.content,
    };

    // console.log(data)

    fetch("https://mailblink-backend.onrender.com/sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .then(() => {
        updateCampaignStatus(smsID, "sent");
      })
      .then(() => {
        router.push("/dashboard/sms");
      });
  };

  return (
    <>
      <header className="mx-10 py-5">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Review Campaign</h1>
            <p className="text-lg text-gray-600">
              Review your campaign and send it
            </p>
          </div>
          <div className="hidden w-60 lg:block">
            <button
              href={`/campaigns`}
              className="h-full w-full items-center justify-center rounded-md bg-navyBlue px-4 text-sm font-medium text-white transition-all hover:bg-navyBlue/80"
              onClick={sendCampaign}
            >
              Send Campaign
            </button>
          </div>
        </div>
      </header>

      <section className="mx-10 mb-10 mt-5 flex flex-col gap-16 rounded-md bg-white p-6 md:flex-row">
        <section className="flex flex-col gap-6 md:w-[60%]">
          <h2 className="text-xl font-semibold">Campaign Details</h2>
          <table className="w-full text-sm text-gray-500">
            <tbody>
              {/* Name */}
              <tr className="flex justify-between border-b-[1px] py-3">
                <td>Name</td>
                <td>{campaign?.name}</td>
              </tr>

              {/* Sender
              <tr className="flex justify-between border-b-[1px] py-3">
                <td>Sender</td>
                <td>{`${campaign?.from_name} (${campaign?.from_email})`}</td>
              </tr> */}

              {/* Recipients */}
              <tr className="flex justify-between border-b-[1px] py-3">
                <td>Recipient Group</td>
                <td>{group?.name}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="flex h-screen w-full flex-col items-end gap-6 md:w-[40%]">
          <h2 className="text-xl font-semibold">Campaign Content</h2>

          {sms?.content}
        </section>
      </section>
    </>
  );
};

export default SMSCampaignPreview;
