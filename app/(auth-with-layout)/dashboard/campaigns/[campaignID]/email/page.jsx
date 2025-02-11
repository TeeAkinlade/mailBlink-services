"use client";
import {
  createEmail,
  relateEmailToCampaign,
} from "@/services/supabase.service";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import EmailEditor from "react-email-editor";
import { useForm } from "react-hook-form";
import { uuid } from "short-uuid";
import { useRouter } from "next/navigation";

const CampaignsEditor = () => {
  const { campaignID } = useParams();
  const emailEditorRef = useRef(null);
  const [template, setTemplate] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const exportHtml = async (emailName) => {
    const unlayer = emailEditorRef.current?.editor;

    try {
      const data = await new Promise((resolve, reject) => {
        unlayer?.exportHtml(
          (data) => {
            resolve(data);
          },
          { minify: true },
          (error) => {
            reject(error);
          }
        );
      });

      const { design, html } = data;
      const stringDesign = JSON.stringify(design);

      const email = {
        id: uuid(),
        name: emailName,
        design: stringDesign,
        content: html,
      };

      console.log(email)

      createEmail(campaignID, email);
    } catch (error) {
      console.error("Export HTML error:", error);
    }
  };

  const onSubmit = (data) => {
    exportHtml(data.email_name);
    router.push(`/dashboard/campaigns/${campaignID}/preview`);
  };

  useEffect(() => {
    const temp = localStorage.getItem("template");
    if (temp.length === 0) return;
    setTemplate(JSON.parse(temp));
  }, []);

  const onReady = () => {
    //This will be for implementing templates later
    //And adding a button inside the email editor to save emails (if possible, I have to check the docs further)
    emailEditorRef.current?.editor.loadDesign(template);
  };

  return (
    <div className="mx-10 flex h-screen flex-col gap-4">
      <header className="py-5">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Email Editor</h1>
            <p className="text-lg text-gray-600">
              Edit your email before sending it to your contacts
            </p>
          </div>
          <div className="hidden w-60 lg:block">
            <button
              form="email-name"
              type="submit"
              className="h-full w-full items-center justify-center rounded-md bg-navyBlue px-4 text-sm font-medium text-white transition-all hover:bg-navyBlue/80"
            >
              Done editing
            </button>
          </div>
        </div>
      </header>

      <section>
        <form
          id="email-name"
          className="gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>Enter a name for the email</label>
          <input
            placeholder="Email template 1"
            type="text"
            {...register("email_name", {
              required: "The email name field must be filled",
              minLength: {
                value: 3,
                message: "The email name should have at least 3 characters",
              },
              pattern: {
                value: /^(?!\d+$).*/,
                message: "The email name can't only be a number",
              },
            })}
          />
        </form>
      </section>

      <EmailEditor
        ref={emailEditorRef}
        onReady={onReady}
        style={{
          height: "85vh",
          borderRadius: "0.375rem",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default CampaignsEditor;
