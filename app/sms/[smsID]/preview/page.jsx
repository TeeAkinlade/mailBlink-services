"use client";

import { readRelatedGroups, readRelatedSMS } from "@/services/supabase.service";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SMSCampaignPreview = () => {
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

  return (
    <>
      <header className="mx-10 py-5">
        <div className="flex justify-between">
          <article className="w-full text-center text-4xl font-bold text-ui_primary lg:text-left">
            <h1>Review and Send</h1>
          </article>
          <div className="hidden w-60 lg:block">
            <Link
              href={`/campaigns`}
              className="custom-btn"
            >
              Send Campaign
            </Link>
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
