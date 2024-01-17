"use client";

import Spinner from "@/components/Spinner";
import { useSubscribers } from "@/hooks/useSubscribers";

import { SlArrowDown, SlMagnifier } from "react-icons/sl";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useGroups } from "@/hooks/useGroups";
import {
  addSubToGroup,
  addSubscriber,
  createGroup,
  deleteDBData,
} from "@/services/supabase.service";
import { useRouter } from "next/navigation";
import { uuid } from "short-uuid";

const Contacts = () => {
  const router = useRouter();
  const { subscribers, getSubscribers, error, isLoading } = useSubscribers();
  const {
    groups,
    getGroups,
    error: groupsError,
    isLoading: loadingGroups,
  } = useGroups();
  const [uiSubscribers, setUiSubscribers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedSubscribers, setSelectedSubscribers] = useState([]);
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const actionsButtonRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");

  const [isAddToGroupOpen, setIsAddToGroupOpen] = useState(false);
  const [isCreateGroupOpen, setIsCreateGroupOpen] = useState(false);
  const [isImportContactsOpen, setIsImportContactsOpen] = useState(false);

  useEffect(() => {
    getSubscribers();
  }, [getSubscribers]);

  useEffect(() => {
    setUiSubscribers(subscribers);
  }, [subscribers]);

  useEffect(() => {
    const filteredSubscribers = subscribers.filter((sub) =>
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

  const handleAddToGroup = () => {
    setIsAddToGroupOpen(true);
    getGroups();
    setShowActionsMenu(false);
    setSelectedSubscribers([]);
    setSelectAll(false);
  };

  const handleCreateGroup = () => {
    setIsCreateGroupOpen(true);
    setShowActionsMenu(false);
  };

  const handleDeleteContact = async () => {
    try {
      // Create an array of promises for each deleteDBData operation
      const deletePromises = selectedSubscribers.map((sub) =>
        deleteDBData("SUBSCRIBERS", "id", sub.id)
      );

      // Wait for all deleteDBData operations to complete
      await Promise.all(deletePromises);

      // After all deletions are done, fetch updated subscribers
      await getSubscribers();

      setShowActionsMenu(false);
      setSelectedSubscribers([]);
      setSelectAll(false);
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
    setSelectedSubscribers([]);
    setSelectAll(false);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setSelectedSubscribers([]);
    setSelectAll(false);
  };

  const parseCSV = (csvData) => {
    const rows = csvData.split("\n");
    const header = rows[0].split(",");
    const parsedData = [];

    for (let i = 1; i < rows.length; i++) {
      const columns = rows[i].split(",");
      const obj = {
        id: uuid(),
        email: columns[0].trim(),
        first_name: columns[1].trim(),
        last_name: columns[2].trim(),
        phone_number: columns[3].trim(),
      };
      parsedData.push(obj);
    }

    return parsedData;
  };

  const isActionsButtonDisabled = selectedSubscribers.length === 0;

  return (
    <>
      <div className="space-y-4 p-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Contacts</h1>
          <p className="text-lg text-gray-600">View and manage your contacts</p>
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
                  onClick={handleAddToGroup}
                >
                  Add to Group
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleCreateGroup}
                >
                  Create Group
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleDeleteContact}
                >
                  Delete Contact
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

          <button
            className="h-full items-center justify-center rounded-md bg-navyBlue px-4 text-sm font-medium text-white transition-all hover:bg-navyBlue/80"
            onClick={() => {
              setIsImportContactsOpen(true);
            }}
          >
            Import Subscribers
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Showing {uiSubscribers?.length} results
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

      {/* AddToGroup dialog */}
      <dialog
        open={isAddToGroupOpen}
        className="fixed top-0 h-full w-full animate-fade-in bg-gray-400 bg-opacity-60"
      >
        <div className="flex h-full items-center justify-center">
          <div
            className={`mx-10 flex w-full max-w-md flex-col rounded-md bg-gray-50`}
          >
            <div className="m-2 flex flex-col items-center justify-between">
              <div className="m-2 flex w-full items-center justify-between">
                <article className="relative left-5 z-0 flex-col flex w-full items-center justify-center">
                  <h1 className="text-3xl font-bold">Add to Group</h1>
                </article>

                <button
                  className="z-10 p-2"
                  onClick={() => {
                    setIsAddToGroupOpen(false);
                  }}
                >
                  <Image
                    src="/assets/icons/close.icon.svg"
                    width={24}
                    height={24}
                    alt="close"
                  />
                </button>
              </div>

              <p className="text-lg text-gray-600">
                Choose a group to add the selected contacts to
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault(); // Prevent the default form submission behavior
                const formData = new FormData(event.target);
                const data = Object.fromEntries(formData.entries());
                selectedSubscribers.map((sub) => {
                  addSubToGroup(data.selectedGroup, sub.id);
                });
                router.push(
                  `/dashboard/groups/${data.selectedGroup}/subscribers`
                );
              }}
              className="px-4 py-4"
            >
              {loadingGroups ? (
                <div className="flex h-full w-full items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                <div>
                  <select
                    name="selectedGroup"
                    className="h-14 w-full rounded-md border"
                  >
                    <option value="">Select Group</option>
                    {groups?.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="h-full items-center justify-center rounded-md bg-navyBlue px-4 text-sm font-medium text-white transition-all hover:bg-navyBlue/80"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </dialog>

      {/* CreateGroup dialog */}
      <dialog
        open={isCreateGroupOpen}
        className="fixed top-0 h-full w-full animate-fade-in bg-gray-400 bg-opacity-60"
      >
        <div className="flex h-full items-center justify-center">
          <div
            className={`mx-10 flex w-full max-w-md flex-col rounded-md bg-gray-50`}
          >
            <div className="m-2 flex flex-col items-center justify-between">
              <div className="m-2 flex w-full items-center justify-between">
                <article className="relative left-5 z-0 flex-col flex w-full items-center justify-center">
                  <h1 className="text-3xl font-bold">Create Group</h1>
                </article>

                <button
                  className="z-10 p-2"
                  onClick={() => {
                    setIsCreateGroupOpen(false);
                  }}
                >
                  <Image
                    src="/assets/icons/close.icon.svg"
                    width={24}
                    height={24}
                    alt="close"
                  />
                </button>
              </div>

              <p className="text-lg text-gray-600">
                Create a new group based on the selected contacts
              </p>
            </div>

            <form
              onSubmit={async (event) => {
                try {
                  event.preventDefault();
                  const formData = new FormData(event.target);
                  const data = Object.fromEntries(formData.entries());
                  const groupId = uuid();

                  await createGroup({ id: groupId, name: data.groupName });

                  // Create an array of promises for each addSubToGroup operation
                  const addSubPromises = selectedSubscribers.map((sub) =>
                    addSubToGroup(groupId, sub.id)
                  );

                  // Wait for all addSubToGroup operations to complete
                  await Promise.all(addSubPromises);

                  router.push(`/dashboard/groups/${groupId}/subscribers`);
                } catch (error) {
                  console.error("An error occurred:", error);
                }
              }}
              className="px-4 py-4"
            >
              <div>
                <input name="groupName" type="text" placeholder="Group name" />
              </div>

              <button
                type="submit"
                className="h-full items-center justify-center rounded-md bg-navyBlue px-4 text-sm font-medium text-white transition-all hover:bg-navyBlue/80"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Import contacts dialog */}
      <dialog
        open={isImportContactsOpen}
        className="fixed top-0 h-full w-full animate-fade-in bg-gray-400 bg-opacity-60"
      >
        <div className="flex h-full items-center justify-center">
          <div
            className={`mx-10 flex w-full max-w-md flex-col rounded-md bg-gray-50`}
          >
            <div className="m-2 flex flex-col items-center justify-between">
              <div className="m-2 flex w-full items-center justify-between">
                <article className="relative left-5 z-0 flex-col flex w-full items-center justify-center">
                  <h1 className="text-3xl font-bold">Create Group</h1>
                </article>

                <button
                  className="z-10 p-2"
                  onClick={() => {
                    setIsImportContactsOpen(false);
                  }}
                >
                  <Image
                    src="/assets/icons/close.icon.svg"
                    width={24}
                    height={24}
                    alt="close"
                  />
                </button>
              </div>

              <p className="text-lg text-gray-600">
                Import your contacts in CSV format
              </p>
            </div>

            <form
              onSubmit={async (event) => {
                try {
                  event.preventDefault();
                  const formData = new FormData(event.target);
                  const file = formData.get("csvFile");

                  if (file) {
                    const fileReader = new FileReader();
                    fileReader.onload = async (e) => {
                      const csvData = e.target.result;
                      const parsedData = parseCSV(csvData);

                      // Create an array of promises for each addSubscriber operation
                      const addSubscriberPromises = parsedData.map((sub) =>
                        addSubscriber(sub)
                      );

                      // Wait for all addSubscriber operations to complete
                      await Promise.all(addSubscriberPromises);

                      // After all additions are done, fetch updated subscribers
                      await getSubscribers().then(() => {
                        setIsImportContactsOpen(false);
                      });
                    };

                    fileReader.readAsText(file);
                  }
                } catch (error) {
                  console.error("An error occurred:", error);
                }
              }}
              className="px-4 py-4"
            >
              <input type="file" name="csvFile" accept=".csv"></input>

              <button
                type="submit"
                className="h-full items-center justify-center rounded-md bg-navyBlue px-4 text-sm font-medium text-white transition-all hover:bg-navyBlue/80"
              >
                Import
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Contacts;
