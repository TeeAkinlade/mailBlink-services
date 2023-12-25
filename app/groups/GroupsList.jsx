"use client";

import { deleteDBData } from "@/services/supabase.service";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const GroupsList = ({ groups, getGroups }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const [uiGroups, setUiGroups] = useState(null);

  useEffect(() => {
    setUiGroups(groups);
  }, [groups]);

  const onSubmit = (data) => {
    if (isValid) {
      if (data.search.length < 3) setUiGroups(groups);
      else {
        const newGroups = uiGroups.filter((group) =>
          group.name.includes(data.search)
        );
        setUiGroups(newGroups);
      }
    }
  };

  return (
    <ul className="flex flex-col gap-6">
      {/* Search bar */}
      <div className="border-b-[1px]">
        <form
          id="search-group"
          className="mb-6 text-slate-500"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-1">
            <input
              className="w-full rounded-l-full border-y-[1px] border-l-[1px] border-slate-200 px-2 py-3 font-normal transition-colors focus:border-slate-400 focus:outline-none"
              type="text"
              placeholder="Enter the group name..."
              {...register("search", {
                pattern: {
                  value: /^(?!\d+$).*/,
                  message: "A group name can't only be a number",
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

      {/* List the groups */}
      {groups.map((group) => {
        return (
          <li key={group.id} className="flex items-start justify-between">
            <section className="flex gap-6">
              {/* group content */}
              <section className="mt-2 flex flex-col items-start">
                <article className="text-2xl font-normal">
                  <h2>{group.name}</h2>
                </article>
              </section>
            </section>

            {/* Delete group button */}
            <div className="hidden gap-[1px] overflow-hidden rounded-lg font-medium text-slate-500 lg:flex">
              <Link
                href={`/groups/${group.id}/subscribers`}
                className="bg-slate-200 p-2 transition-colors hover:bg-slate-100"
              >
                <Image
                  src="/assets/icons/open-link.icon.svg"
                  alt="view details"
                  width={24}
                  height={24}
                />
              </Link>
              <button
                className="bg-slate-200 p-2 transition-colors hover:bg-slate-100"
                onClick={() => {
                  deleteDBData("GROUPS", "id", group?.id);
                  getGroups();
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
        );
      })}
    </ul>
  );
};
