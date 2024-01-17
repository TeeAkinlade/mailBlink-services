"use client";

import { useEffect, useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useCurrentUser } from "../currentUser";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import Footer from "./components/Footer";
import "/styles/globals.css";

export default function DashboardLayout({ children }) {
  const { user, loading } = useCurrentUser();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      return null;
    }, 10000);

    if (user?.aud === "authenticated") {
      console.log("authorized");
      setAuthorized(true);
    }

    return () => {
      // Clear the timer if the component unmounts before the delay
      clearTimeout(timerRef.current);
    };
  }, [user]);

  // protected route logic using a timer
  useEffect(() => {
    if (!authorized && timerRef.current === 10000) {
      router.push("/auth/login");
    }
  }, [authorized, router]);

  return (
    <>
      {/* Sidebar component remains static above all elements on the page */}
      <main className="flex overflow-hidden h-screen w-screen dark:bg-dark_bg dark:text-dark_text ">
        <Sidebar />
        {/* Main Dashboard display area */}
        <div className="flex flex-col overflow-x-hidden justify-between gap-4 md:gap-0 w-full h-full overflow-y-auto ">
          <Navbar />
          {loading ? (
            <Spinner />
          ) : (
            <div className="flex flex-col mb-6">{children}</div>
          )}
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
