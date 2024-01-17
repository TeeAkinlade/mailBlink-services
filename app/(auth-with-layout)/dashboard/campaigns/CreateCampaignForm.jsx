"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import close from "@/public/assets/icons/close.icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useGroups } from "@/hooks/useGroups";
import { useEmails } from "@/hooks/useEmails";
import Alert from "@/components/Alert";
import { uuid } from "short-uuid";
import { createCampaign } from "@/services/supabase.service";

export const CreateCampaignForm = () => {
  const {
    groups,
    getGroups,
    error: groupsError,
    isLoading: loadingGroups,
  } = useGroups();

  const {
    emails,
    getEmails,
    error: emailsError,
    isLoading: loadingEmails,
  } = useEmails();

  const [campaign, setCampaign] = useState({
    id: 0,
    name: "",
    subject: "",
    from_name: "",
    from_email: "",
    status: "",
    type: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false);
  const [isEditorSelectOpen, setIsEditorSelectOpen] = useState(false);
  const [isEmailSelectOpen, setIsEmailSelectOpen] = useState(false);

  const [selectedEmail, setSelectedEmail] = useState({});

  useEffect(() => {
    getGroups();
    getEmails();
  }, []);

  const saveTemplate = (template) => {
    localStorage.setItem("template", template.design);
  };

  const onSubmit = async (data) => {
    if (isValid) {
      const campaignData = {
        id: uuid(),
        name: data.campaign_name,
        subject: data.subject,
        from_name: data.sender_name,
        from_email: data.sender_email,
        status: "draft",
        type: "email",
      };
      setIsEditorSelectOpen(true);
      setCampaign(campaignData);
      createCampaign(campaignData, data.recipients);
    }
    return;
  };

  return (
    <>
      <button
        className="h-full w-full items-center justify-center rounded-md bg-navyBlue px-4 text-sm font-medium text-white transition-all hover:bg-navyBlue/80"
        onClick={() => {
          setIsCreateCampaignOpen(true);
        }}
      >
        Create Campaign
      </button>

      {/* Dialog to choose how to proceed, with an already created email or start from scratch */}

      {isCreateCampaignOpen && (
        <dialog
          open={isCreateCampaignOpen}
          className="fixed top-0 z-20 h-full w-full animate-fade-in bg-black bg-opacity-60"
        >
          <div className="flex h-full items-center justify-center">
            <div
              className={`mx-10 flex w-full max-w-md flex-col rounded-md bg-gray-50`}
            >
              <div className="m-2 flex flex-col items-center justify-between">
                <div className="m-2 flex w-full items-center justify-between">
                  <article className="relative left-5 z-0 flex w-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">
                      {isEditorSelectOpen || isEmailSelectOpen
                        ? "Editor Settings"
                        : "Campaign Settings"}
                    </h1>
                  </article>

                  <button
                    className="z-10 p-2"
                    onClick={() => {
                      setIsEditorSelectOpen(false);
                      setIsEmailSelectOpen(false);
                      setIsCreateCampaignOpen(false);
                    }}
                  >
                    <Image src={close} alt="close" />
                  </button>
                </div>

                <p className="text-lg text-gray-600">
                  Create a new email campaign
                </p>
              </div>

              {!isEditorSelectOpen && !isEmailSelectOpen && (
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

                  {/* Subject */}
                  <div className="flex flex-col gap-1">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      {...register("subject", {
                        required: "The subject field must be filled",
                        minLength: {
                          value: 3,
                          message:
                            "The subject should have at least 3 characters",
                        },
                        pattern: {
                          value: /^(?!\d+$).*/,
                          message: "A subject can't only be a number",
                        },
                      })}
                    />
                  </div>

                  {/* Sender */}
                  <div className="flex flex-col gap-1">
                    <label>Sender</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Name of the sender"
                        {...register("sender_name", {
                          required: "The sender name field must be filled",
                          minLength: {
                            value: 3,
                            message:
                              "The sender name should have at least 3 characters",
                          },
                          pattern: {
                            value: /^(?!\d+$).*/,
                            message: "A sender name can't only be a number",
                          },
                        })}
                      />
                      <input
                        type="email"
                        placeholder="Email of the sender"
                        className="w-full rounded-lg border-[1px] border-slate-400 px-2 py-3 font-normal"
                        {...register("sender_email", {
                          required: "The sender email field must be filled",
                          minLength: {
                            value: 3,
                            message:
                              "The sender email should have at least 3 characters",
                          },
                          pattern: {
                            value: /^(?!\d+$).*/,
                            message: "A sender email can't only be a number",
                          },
                        })}
                      />
                    </div>
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
                  <section>
                    <button
                      className="h-full items-center justify-center rounded-md bg-navyBlue px-4 text-sm font-medium text-white transition-all hover:bg-navyBlue/80"
                      type="submit"
                    >
                      Continue
                    </button>
                  </section>
                  {Object.keys(errors).length > 0 && (
                    <Alert
                      severity="error"
                      message={String(Object.values(errors)[0]?.message)}
                    />
                  )}
                </form>
              )}

              {isEditorSelectOpen && !isEmailSelectOpen && (
                <div className="mx-2 mb-2 grid min-h-[15rem] animate-fade-in grid-cols-2 gap-5 font-semibold text-slate-700">
                  <button
                    onClick={() => {
                      setIsEmailSelectOpen(true);
                    }}
                    className="overflow-hidden rounded-md"
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      className="flex h-full w-full items-center justify-center bg-slate-200 transition-all hover:scale-110 hover:bg-slate-400"
                    >
                      <span>
                        Choose one of your previous emails as a template
                      </span>
                    </div>
                  </button>

                  <Link
                    href={`campaigns/${campaign.id}/email`}
                    onClick={() => {
                      saveTemplate({ design: "" });
                    }}
                    className="overflow-hidden rounded-md"
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      className="flex h-full w-full items-center justify-center bg-slate-200 transition-all hover:scale-110 hover:bg-slate-400"
                    >
                      <span>Start from scratch</span>
                    </div>
                  </Link>
                </div>
              )}

              {/* Select previous email screen */}
              {isEmailSelectOpen && (
                <div className="mx-2 mb-2 flex min-h-[15rem] animate-fade-in items-center font-semibold text-slate-700">
                  <form
                    className="form w-full"
                    onSubmit={(e) => {
                      e.preventDefault();
                      saveTemplate(
                        emails.find((email) => email.id == selectedEmail)
                      );
                      window.location.href = `/dashboard/campaigns/${campaign.id}/email`;
                    }}
                  >
                    <div>
                      <label htmlFor="select-email">Email template</label>
                      <select
                        name="select-email"
                        onChange={(e) => {
                          e.preventDefault();
                          setSelectedEmail(e.target.value);
                        }}
                      >
                        <option>Select an email</option>
                        {emails.map((email) => (
                          <option key={email.id} id={email.id} value={email.id}>
                            {email.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="h-full items-center justify-center rounded-md bg-navyBlue px-4 text-sm font-medium text-white transition-all hover:bg-navyBlue/80"
                    >
                      Next: Content
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};
