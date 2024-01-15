"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import close from "@/public/assets/icons/close.icon.svg";
import Image from "next/image";
import { useGroups } from "@/hooks/useGroups";
import Alert from "@/components/Alert";
import { uuid } from "short-uuid";
import {
  addSubToGroup,
  createGroup,
  readRelatedSubscribers,
} from "@/services/supabase.service";

export const CreateGroupForm = () => {
  const {
    groups,
    getGroups,
    error: groupsError,
    isLoading: loadingGroups,
  } = useGroups();

  const [subs, setSubs] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const [isCreateGroupsOpen, setIsCreateGroupsOpen] = useState(false);

  useEffect(() => {
    getGroups();
  }, []);

  const onSubmit = async (data) => {
    if (isValid) {
      const groupData = {
        id: uuid(),
        name: data.group_name,
      };

      createGroup(groupData);
      const selectedGroups = data.groups;

      for (const group of selectedGroups) {
        const subscribers = await readRelatedSubscribers(group);
        const subscriberList = [];

        subscribers.forEach((groupObj) => {
          groupObj.SUBSCRIBERS.forEach((subscriber) => {
            subscriberList.push(subscriber.id);
          });
        });

        subscriberList.forEach((subID) => {
          addSubToGroup(groupData.id, subID);
        });
      }
    }
    window.location.reload();
  };

  return (
    <>
      <button
        onClick={() => {
          setIsCreateGroupsOpen(true);
        }}
        className="custom-btn"
      >
        Create Group
      </button>

      {isCreateGroupsOpen && (
        <dialog
          open={isCreateGroupsOpen}
          className="fixed top-0 flex h-full w-full animate-fade-in items-center justify-center bg-gray-400 bg-opacity-60 backdrop-blur-sm"
        >
          <div
            className={`bg-gray-200 mx-10 flex w-full max-w-md flex-col rounded-md`}
          >
            <div className="m-2 flex items-center justify-between">
              <article className="relative left-5 z-0 flex w-full items-center justify-center">
                <h2 className="text-lg font-bold">{"Groups Settings"}</h2>
              </article>

              <button
                className="z-10 p-2"
                onClick={() => {
                  setIsCreateGroupsOpen(false);
                }}
              >
                <Image src={close} alt="close" />
              </button>
            </div>

            <form
              className="form mx-2 mb-4 flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Group name */}
              <div className="flex flex-col gap-1">
                <label>Group name</label>
                <input
                  type="text"
                  placeholder="Group"
                  {...register("group_name", {
                    required: "The group name field must be filled",
                    minLength: {
                      value: 3,
                      message:
                        "The group name should have at least 3 characters",
                    },
                    pattern: {
                      value: /^(?!\d+$).*/,
                      message: "A group name can't only be a number",
                    },
                  })}
                />
              </div>

              {/* Choose subscribers */}
              <div>
                <label>Merge groups subscribers</label>
                {groups?.map((group) => (
                  <div key={group.id}>
                    <p className="flex gap-1">
                      <input
                        type="checkbox"
                        value={group.id}
                        {...register("groups")}
                      />
                      {group.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <section>
                <button className="custom-btn" type="submit">
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
          </div>
        </dialog>
      )}
    </>
  );
};
