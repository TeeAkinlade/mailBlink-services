"use client";

import { useEffect, useState } from "react";
import { useGroups } from "@/hooks/useGroups";
import Spinner from "@/components/Spinner";
import { GroupsList } from "./GroupsList";
import { CreateGroupForm } from "./CreateGroupForm";

const Groups = () => {
  const {
    groups,
    getGroups,
    error: groupsError,
    isLoading: loadingGroups,
  } = useGroups();

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <>
      <header className="mx-10 py-5 ">
        <div className="flex justify-between">
          <article className="w-full text-center text-4xl font-bold text-ui_primary lg:text-left">
            <h1>Groups</h1>
          </article>
          <div className="hidden w-60 lg:block">
            <CreateGroupForm />
          </div>
        </div>
      </header>

      <section className="mx-10 mt-5 mb-10 bg-white rounded-md p-6">
        {groups ? (
          <GroupsList groups={groups} getGroups={getGroups} />
        ) : (
          <Spinner />
        )}
      </section>
    </>
  );
};

export default Groups;
