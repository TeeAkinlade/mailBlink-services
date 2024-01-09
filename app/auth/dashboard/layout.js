'use client';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import currentUser from '../currentUser';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';
export default function DashboardLayout({ children }) {
	const { user, loading } = currentUser();
	const router = useRouter();
	const [authorized, setAuthorized] = useState(false);

  console.log(user);
  let timer;
  useEffect(() => {
    timer = setTimeout(() => {
      return null;
    }, 10000);

    if (user?.user_metadata?.name) {
      setAuthorized(true);

      // 10 seconds in milliseconds
    }

    return () => {
      // Clear the timer if the component unmounts before the delay
      clearTimeout(timer);
    };
  }, [timer]);

	console.log(timer);
	// protected route logic using a timer
	if (!authorized && timer === 10000) {
		return router.push('/auth/login');
	}
	return (
		<>
			{/* Sidebar component remains static above all elements on the page */}
			<main className='flex overflow-hidden h-screen w-screen dark:bg-dark_bg dark:text-dark_text '>
				{/* <Sidebar /> */}
				<Sidebar />
				{/* Main Dashboard display area */}
				<div className='flex flex-col overflow-x-hidden  gap-4 md:gap-0 w-full h-full overflow-y-auto '>
					{/* Navbar COMPONENT goes here */}

					<Navbar />
					{/* When routing begins we would use the <Outlet/> functionality to render different pages */}
					{loading ? <Spinner /> : <div>{children}</div>}
				</div>
			</main>
		</>
	);
}
