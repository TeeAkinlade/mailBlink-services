"use client";

// import { useState } from "react";
// import { useEffect } from "react";
// import { readRelatedSubscribers } from "@/services/supabase.service";
// import { useParams } from "next/navigation";
// import Spinner from "@/components/Spinner";
// import Link from "next/link";
import Spinner from "@/components/Spinner";
import { SlArrowDown, SlMagnifier } from "react-icons/sl";
import { useEffect, useState, useRef } from "react";
import {
  deleteDBData,
  deleteSubFromGroup,
  readRelatedSubscribers,
} from "@/services/supabase.service";
import { useParams } from "next/navigation";

const GroupDetail = () => {
  const { groupID } = useParams();
  const [subscribers, setSubscribers] = useState(null);
  const [group, setGroup] = useState(null);

  const [uiSubscribers, setUiSubscribers] = useState(null);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedSubscribers, setSelectedSubscribers] = useState([]);
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const actionsButtonRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");

  const fetchSubscribers = async () => {
    const subs = await readRelatedSubscribers(groupID).then((group) => {
      setGroup(group[0]);
      if (group[0].SUBSCRIBERS) {
        setSubscribers(group[0]?.SUBSCRIBERS);
      }
    });
  };

  useEffect(() => {
    fetchSubscribers();
  }, [fetchSubscribers]);

  useEffect(() => {
    setUiSubscribers(subscribers);
  }, [subscribers]);

  useEffect(() => {
    const filteredSubscribers = subscribers?.filter((sub) =>
      sub.email.toLowerCase().includes(searchInput.toLowerCase())
    );
    setUiSubscribers(filteredSubscribers);
  }, [searchInput, subscribers]);

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
      setSelectedSubscribers([...uiSubscribers]);
    } else {
      setSelectedSubscribers([]);
    }
  };

  const handleCheckboxChange = (subscriber) => {
    if (selectedSubscribers.some((selected) => selected.id === subscriber.id)) {
      setSelectedSubscribers(
        selectedSubscribers.filter((selected) => selected.id !== subscriber.id)
      );
    } else {
      setSelectedSubscribers([...selectedSubscribers, subscriber]);
    }
  };

  const handleActionsButtonClick = () => {
    if (!isActionsButtonDisabled) {
      setShowActionsMenu(!showActionsMenu);
    }
  };

  const handleDeleteContact = async () => {
    try {
      // Create an array of promises for each deleteDBData operation
      const deletePromises = selectedSubscribers.map((sub) =>
        deleteSubFromGroup(groupID, sub.id)
      );

      // Wait for all deleteDBData operations to complete
      await Promise.all(deletePromises);

      fetchSubscribers();
      setShowActionsMenu(false);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleExportAsCSV = () => {
    // Create a CSV content string
    const csvContent =
      "data:text/csv;charset=utf-8," +
      encodeURIComponent(
        "email, first_name, last_name, phone_number\n" +
          selectedSubscribers
            .map(
              (subscriber) =>
                `${subscriber.email},${subscriber.first_name},${subscriber.last_name},${subscriber.phone_number}`
            )
            .join("\n")
      );

    // Create a virtual link and trigger a click to download the file
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", "contacts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Hide the actions menu
    setShowActionsMenu(false);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setSelectedSubscribers([]);
  };

  const isActionsButtonDisabled = selectedSubscribers.length === 0;

  return (
    <>
      <div className="space-y-4 p-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{group?.name}</h1>
          <p className="text-lg text-gray-600">{`View and manage your contacts in the "${group?.name}" group`}</p>
        </div>
        <div className="flex h-14 items-center space-x-4">
          <div className="flex h-full w-full items-center space-x-2 rounded-md border pl-3">
            <SlMagnifier />
            <input
              className="h-full w-full bg-transparent text-sm outline-none"
              placeholder="Search contacts by email"
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
                  onClick={handleDeleteContact}
                >
                  Delete from group
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleExportAsCSV}
                >
                  Export as CSV
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Showing {subscribers?.length} results
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
                  EMAIL
                </th>
                <th className="w-[20%] px-4 text-left align-middle font-medium">
                  FIRST NAME
                </th>
                <th className="w-[20%] px-4 text-left align-middle font-medium">
                  LAST NAME
                </th>
                <th className="w-[20%] px-4 text-left align-middle font-medium">
                  PHONE
                </th>
                <th className="w-[15%] px-4 text-left align-middle font-medium">
                  STATUS
                </th>
              </tr>
            </thead>
            {!uiSubscribers ? (
              <tbody>
                <tr>
                  <td colSpan="6">
                    <Spinner />
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="">
                {uiSubscribers?.map((sub) => (
                  <tr
                    key={sub.id}
                    className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
                  >
                    <td className="w-[5%] p-4 align-middle">
                      <input
                        type="checkbox"
                        checked={selectedSubscribers.includes(sub)}
                        onChange={() => handleCheckboxChange(sub)}
                      />
                    </td>
                    <td className="w-[20%] p-4 align-middle font-medium">
                      {sub.email}
                    </td>
                    <td className="w-[20%] p-4 align-middle">
                      {sub.first_name}
                    </td>
                    <td className="w-[20%] p-4 align-middle">
                      {sub.last_name}
                    </td>
                    <td className="w-[20%] p-4 align-middle">
                      {sub.phone_number}
                    </td>
                    <td className="w-[15%] p-4 align-middle">Active</td>
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

export default GroupDetail;
