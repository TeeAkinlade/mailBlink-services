"use client";

import Spinner from "@/components/Spinner";
import { SlArrowDown, SlMagnifier } from "react-icons/sl";
import { useEffect, useState, useRef } from "react";
import { useGroups } from "@/hooks/useGroups";
import {
  deleteDBData,
  readRelatedSubscribers,
} from "@/services/supabase.service";
import { IoMdOpen } from "react-icons/io";
import Link from "next/link";

const Groups = () => {
  const { groups, getGroups, error, isLoading } = useGroups();
  const [uiGroups, setUiGroups] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const actionsButtonRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getGroups();
  }, []);

  useEffect(() => {
    const fetchGroupsData = async () => {
      const newGroups = await Promise.all(
        groups.map(async (group) => {
          const subscribers = await readRelatedSubscribers(group.id);
          return { ...group, amount: subscribers.length };
        })
      );
      setUiGroups(newGroups);
    };

    fetchGroupsData();
  }, [groups]);

  useEffect(() => {
    const filteredGroups = groups.filter((group) =>
      group.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setUiGroups(filteredGroups);
  }, [searchInput, groups]);

  //   useEffect(() => {
  //     console.log("isAddToGroupOpen", isAddToGroupOpen);
  //   }, [isAddToGroupOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        actionsButtonRef.current &&
        !actionsButtonRef.current.contains(event.target)
      ) {
        setShowActionsMenu(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    if (!selectAll) {
      setSelectedGroups([...uiGroups]);
    } else {
      setSelectedGroups([]);
    }
  };

  const handleCheckboxChange = (group) => {
    if (selectedGroups.some((selected) => selected.id === group.id)) {
      setSelectedGroups(
        selectedGroups.filter((selected) => selected.id !== group.id)
      );
    } else {
      setSelectedGroups([...selectedGroups, group]);
    }
  };

  const handleActionsButtonClick = () => {
    if (!isActionsButtonDisabled) {
      setShowActionsMenu(!showActionsMenu);
    }
  };

  const handleDeleteGroup = async () => {
    try {
      // Create an array of promises for each deleteDBData operation
      const deletePromises = selectedGroups.map((group) =>
        deleteDBData("GROUPS", "id", group.id)
      );

      // Wait for all deleteDBData operations to complete
      await Promise.all(deletePromises);

      // After all deletions are done, fetch updated groups
      await getGroups();

      setShowActionsMenu(false);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setSelectedGroups([]);
  };

  const isActionsButtonDisabled = selectedGroups.length === 0;

  return (
    <>
      <div className="space-y-4 p-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Groups</h1>
          <p className="text-lg text-gray-600">View and manage your groups</p>
        </div>
        <div className="flex h-14 items-center space-x-4">
          <div className="flex h-full w-full items-center space-x-2 rounded-md border pl-3">
            <SlMagnifier />
            <input
              className="h-full w-full bg-transparent text-sm outline-none"
              placeholder="Search groups by name"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>

          <div className="relative h-full" ref={actionsButtonRef}>
            <button
              className={`flex h-full items-center gap-2 rounded-md border px-3 text-sm focus:outline-none ${
                isActionsButtonDisabled
                  ? "disabled:pointer-events-none disabled:opacity-50"
                  : ""
              }`}
              disabled={isActionsButtonDisabled}
              onClick={handleActionsButtonClick}
            >
              <span>Actions</span>
              <SlArrowDown />
            </button>
            {showActionsMenu && (
              <div className="absolute right-0 z-10 mt-2 w-48 divide-y divide-gray-100 rounded-md border bg-white shadow-lg">
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleDeleteGroup}
                >
                  Delete Group
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Showing {groups?.length} results
          </p>
        </div>
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b text-gray-500 transition-colors hover:bg-gray-50">
                <th className="h-12 w-[5%] px-4 text-left align-middle font-medium">
                  <input
                    id="select-all"
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectAll}
                  />
                </th>
                <th className="w-[20%] px-4 text-left align-middle font-medium">
                  NAME
                </th>
                <th className="w-[20%] px-4 text-center align-middle font-medium">
                  SUBSCRIBER AMOUNT
                </th>
                <th className="w-[20%] px-4 text-end align-middle font-medium">
                  SUBSCRIBER LIST
                </th>
              </tr>
            </thead>
            {isLoading ? (
              <tbody>
                <tr>
                  <td colSpan="6">
                    <Spinner />
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="">
                {uiGroups?.map((group) => (
                  <tr
                    key={group.id}
                    className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
                  >
                    <td className="w-[5%] p-4 align-middle">
                      <input
                        type="checkbox"
                        checked={selectedGroups.includes(group)}
                        onChange={() => handleCheckboxChange(group)}
                      />
                    </td>
                    <td className="w-[20%] p-4 align-middle font-medium">
                      {group.name}
                    </td>
                    <td className="w-[20%] p-4 text-center align-middle">
                      {group.amount}
                    </td>
                    <td className="flex w-full justify-end  p-4 text-end align-middle">
                      <Link
                        className="hover:scale-125 transition-transform"
                        href={`/dashboard/groups/${group.id}/subscribers`}
                      >
                        <IoMdOpen />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Groups;
