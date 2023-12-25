"use client";

import { useState } from "react";
import { useEffect } from "react";
import { readRelatedSubscribers } from "@/services/supabase.service";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner";
import Link from "next/link";

const GroupDetail = () => {
  const { groupID } = useParams();
  const [subscribers, setSubscribers] = useState(null);
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      const subs = await readRelatedSubscribers(groupID).then((group) => {
        console.log(group);
        setGroup(group[0]);
        if (group[0].SUBSCRIBERS) {
          setSubscribers(group[0]?.SUBSCRIBERS);
        }
      });
    };

    fetchSubscribers();
  }, []);
  return (
    <div>
      {subscribers ? (
        <>
          <header className="mx-10 py-5">
            <div className="flex justify-between">
              <article className="w-full text-center text-4xl font-bold text-ui_primary lg:text-left">
                <h1>{group?.name}</h1>
              </article>
              <div className="hidden w-60 lg:block">
                <Link href={`/groups`} className="custom-btn">
                  Go to groups
                </Link>
              </div>
            </div>
          </header>

          <section className="mx-10 mb-10 mt-5 flex flex-col gap-5 rounded-md bg-white p-6 ">
            <h2 className="text-xl font-semibold">Subscribers</h2>
            <table className="w-full text-sm text-gray-500">
              <tbody>
                <tr className="flex justify-between border-b-[1px] py-3">
                  <th>Email</th>
                  <th className="hidden md:flex">Name</th>
                  <th>Phone Number</th>
                </tr>
                {subscribers.map((sub) => (
                  <tr
                    key={sub.id}
                    className="flex justify-between border-b-[1px] py-3"
                  >
                    <td>{sub.email}</td>
                    <td className="hidden md:flex">
                      {sub.first_name + ` ${sub.last_name}`}
                    </td>
                    <td>
                      {sub?.phone?.lenght > 0 ? sub.phone : "No phone number"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default GroupDetail;
