"use client";

import { useEffect, useState } from "react";
import close from "@/public/assets/icons/close.icon.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useGroups } from "@/hooks/useGroups";
import { useSms } from "@/hooks/useSms";
import { uuid } from "short-uuid";
import {
  createCampaign,
  createSMS,
  relateSMSToCampaign,
} from "@/services/supabase.service";
import Alert from "@/components/Alert";
import { useRouter } from "next/navigation";

export const CreateSMSForm = () => {
  const {
    groups,
    getGroups,
    error: groupsError,
    isLoading: loadingGroups,
  } = useGroups();

  const { sms, getSms, error: smsError, isLoading: loadingSms } = useSms();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const {
    register: registerContent,
    handleSubmit: handleSubmitContent,
    formState: { errors: errorsContent, isValid: isValidContent },
  } = useForm({ mode: "onSubmit" });

  const [campaign, setCampaign] = useState({
    id: 0,
    name: "",
    subject: "",
    from_name: "",
    from_email: "",
    status: "",
    type: "",
  });

  const router = useRouter();
  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  useEffect(() => {
    getGroups();
    getSms();
  }, []);

  const onSubmit = async (data) => {
    if (isValid) {
      const campaignData = {
        id: uuid(),
        name: data.campaign_name,
        subject: null,
        from_name: null,
        from_email: null,
        status: "draft",
        type: "sms",
      };
      setCampaign(campaignData);
      createCampaign(campaignData, data.recipients);
      setIsEditorOpen(true);
    }
    return;
  };

  const onSubmitContent = async (data) => {
    if (isValidContent) {
      const sms = {
        id: uuid(),
        content: data.content,
      };
      createSMS(campaign.id, sms);
      router.push(`/sms/${campaign.id}/preview`);
    }
    return;
  };

  return (
    <>
      <button
        onClick={() => {
          setIsCreateCampaignOpen(true);
        }}
        className="custom-btn"
      >
        Create Campaign
      </button>

      {isCreateCampaignOpen && (
        <dialog
          open={isCreateCampaignOpen}
          className="fixed top-0 flex h-full w-full animate-fade-in items-center justify-center bg-gray-400 bg-opacity-60 backdrop-blur-sm"
        >
          <div
            className="mx-10 flex w-full max-w-md flex-col rounded-md bg-gray-100"
          >
            <div className="m-2 flex items-center justify-between">
              <article className="relative left-5 z-0 flex w-full items-center justify-center">
                <h2 className="text-lg font-bold">
                  {isEditorOpen ? "SMS Content" : "Campaign Settings"}
                </h2>
              </article>

              <button
                className="z-10 p-2"
                onClick={() => {
                  setIsEditorOpen(false);
                  setIsCreateCampaignOpen(false);
                }}
              >
                <Image src={close} alt="close" />
              </button>
            </div>

            {!isEditorOpen && (
              <form
                className="form mx-2 mb-4 flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Campaign name */}
                <div className="flex flex-col gap-1">
                  <label>Campaign name</label>
                  <input
                    type="text"
                    placeholder="Campaign"
                    {...register("campaign_name", {
                      required: "The campaign name field must be filled",
                      minLength: {
                        value: 3,
                        message:
                          "The campaign name should have at least 3 characters",
                      },
                      pattern: {
                        value: /^(?!\d+$).*/,
                        message: "A campaign name can't only be a number",
                      },
                    })}
                  />
                </div>

                {/* Sender */}
                <div className="flex flex-col gap-1">
                  <label>Sender phone number</label>

                  <input
                    type="text"
                    placeholder="+1501712266"
                    {...register("sender_phone", {
                      required: "The sender field must be filled",
                      minLength: {
                        value: 3,
                        message:
                          "The subject should have at least 3 characters",
                      },
                      pattern: {
                        value: /^(\+|\d)+$/,
                        message: "A phone number can't contain letters",
                      },
                    })}
                  />
                </div>

                {/* Recipients */}
                <div className="flex flex-col gap-1">
                  <label>Recipients</label>
                  <select
                    {...register("recipients", {
                      required: "Please choose the recipients",
                    })}
                  >
                    <option>Select recipient group</option>
                    {groups.map((group) => (
                      <option key={group.id} id={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Button */}
                <button className="custom-btn" type="submit">
                  Next: Content
                </button>

                {Object.keys(errors).length > 0 && (
                  <Alert
                    severity="error"
                    message={String(Object.values(errors)[0]?.message)}
                  />
                )}
              </form>
            )}

            {isEditorOpen && (
              <form
                className="form mx-2 mb-4 flex flex-col"
                onSubmit={handleSubmitContent(onSubmitContent)}
              >
                {/* SMS body */}
                <div>
                  <label>Sms content*</label>
                  <textarea
                    name="sms-body"
                    rows="4"
                    placeholder="Your text message content"
                    {...registerContent("content", {
                      required: "Please choose the recipients",
                    })}
                  />
                </div>

                {/* Button */}
                <section>
                  <button
                    type="submit"
                    className="custom-btn"
                  >
                    Next: Preview
                  </button>
                </section>
                {Object.keys(errorsContent).length > 0 && (
                  <Alert
                    severity="error"
                    message={String(Object.values(errorsContent)[0]?.message)}
                  />
                )}
              </form>
            )}
          </div>
        </dialog>
      )}
    </>
  );
};
