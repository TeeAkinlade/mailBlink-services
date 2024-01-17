"use client";

import Spinner from "@/components/Spinner";
import { SlArrowDown, SlMagnifier } from "react-icons/sl";

import { useEffect, useState, useRef } from "react";
import { deleteDBData } from "@/services/supabase.service";
import Link from "next/link";
import { IoMdOpen } from "react-icons/io";

export const SMSList = ({ smsCampaigns, getCampaigns }) => {
  const [uiCampaigns, setUiCampaigns] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const actionsButtonRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getCampaigns();
  }, []);

  useEffect(() => {
    console.log(smsCampaigns);
    setUiCampaigns(smsCampaigns);
  }, [smsCampaigns, getCampaigns]);

  useEffect(() => {
    const filteredCampaigns = smsCampaigns?.filter((camp) =>
      camp.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setUiCampaigns(filteredCampaigns);
  }, [searchInput, smsCampaigns]);

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
      setSelectedCampaigns([...uiCampaigns]);
    } else {
      setSelectedCampaigns([]);
    }
  };

  const handleCheckboxChange = (campaign) => {
    if (selectedCampaigns.some((selected) => selected.id === campaign.id)) {
      setSelectedCampaigns(
        selectedCampaigns.filter((selected) => selected.id !== campaign.id)
      );
    } else {
      setSelectedCampaigns([...selectedCampaigns, campaign]);
    }
  };

  const handleActionsButtonClick = () => {
    if (!isActionsButtonDisabled) {
      setShowActionsMenu(!showActionsMenu);
    }
  };

  const handleDeleteCampaign = async () => {
    try {
      // Create an array of promises for each deleteDBData operation
      const deletePromises = selectedCampaigns.map((camp) =>
        deleteDBData("CAMPAIGNS", "id", camp.id)
      );
      // Wait for all deleteDBData operations to complete
      await Promise.all(deletePromises);
      // After all deletions are done, fetch updated campaigns
      await getCampaigns();
      setShowActionsMenu(false);
      setSelectedCampaigns([]);
      setSelectAll(false);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setSelectedCampaigns([]);
    setSelectAll(false);
  };

  const isActionsButtonDisabled = selectedCampaigns.length === 0;

  return (
    <div className="space-y-4 p-8">
      <div className="flex h-14 items-center space-x-4">
        <div className="flex h-full w-full items-center space-x-2 rounded-md border pl-3">
          <SlMagnifier />
          <input
            className="h-full w-full bg-transparent text-sm outline-none"
            placeholder="Search campaigns by name"
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
                onClick={handleDeleteCampaign}
              >
                Delete Campaign
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          Showing {uiCampaigns?.length} results
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
              <th className="w-[20%] px-4 text-end align-middle font-medium">
                PREVIEW
              </th>
            </tr>
          </thead>
          {!uiCampaigns ? (
            <tbody>
              <tr>
                <td colSpan="6">
                  <Spinner />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="">
              {uiCampaigns?.map((camp) => (
                <tr
                  key={camp.id}
                  className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
                >
                  <td className="w-[5%] p-4 align-middle">
                    <input
                      type="checkbox"
                      checked={selectedCampaigns.includes(camp)}
                      onChange={() => handleCheckboxChange(camp)}
                    />
                  </td>
                  <td className="w-[20%] p-4 align-middle font-medium">
                    {camp.name}
                  </td>
                  <td className="flex w-full justify-end  p-4 text-end align-middle">
                    <Link
                      className="hover:scale-125 transition-transform"
                      href={`/dashboard/sms/${camp.id}/preview`}
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
  );
};
