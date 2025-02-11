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
	const [miniToggle, setMiniToggle] = useState(false);
  const timerRef =  useRef()
const toggleMini = () => {
	setMiniToggle(!miniToggle);
};
//   console.log(user);


  let timer;
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      return null;
    }, 10000);

    if (user?.aud === "authenticated") {
    //   console.log("authorized");
      setAuthorized(true);
    }

    return () => {
      // Clear the timer if the component unmounts before the delay
      clearTimeout(timerRef.current);
    };
  }, [user]);

	// console.log(timer);
	// protected route logic using a timer
	if (!authorized && timer === 10000) {
		return router.push('/auth/login');
	}
	return (
		<>
			{/* Sidebar component remains static above all elements on the page */}
			<main className='flex overflow-hidden h-screen w-screen dark:bg-dark_bg dark:text-dark_text '>
				{/* <Sidebar /> */}
				<Sidebar  toggleMini={toggleMini} miniToggle={miniToggle}  />
				{/* Main Dashboard display area */}
				<div className='flex flex-col overflow-x-hidden justify-between gap-4 md:gap-0 w-full h-full overflow-y-auto '>
					{/* Navbar COMPONENT goes here */}

					<Navbar toggleMini={toggleMini} miniToggle={miniToggle}  />
					{/* When routing begins we would use the <Outlet/> functionality to render different pages */}
					{loading ? <Spinner /> : <div className='flex flex-col mb-6'>{children}</div>}
				
			<div>
				<Footer  />

				</div>	
				
				</div>
			</main>
		</>
	);
}
