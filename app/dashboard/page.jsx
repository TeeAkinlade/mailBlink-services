"use client";
import Sidebar from "./basic_components/Sidebar";
import Navbar from "./basic_components/Navbar";
import Home from "./basic_components/Home";

export default function page() {
  return (
    <>
      {/* Sidebar component remains static above all elements on the page */}
      <main className="flex overflow-hidden h-screen w-screen">
        {/* <Sidebar /> */}
        <Sidebar />
        {/* Main Dashboard display area */}
        <div className="flex flex-col overflow-x-hidden  gap-4 md:gap-0 w-full h-full overflow-y-auto ">
          {/* Navbar COMPONENT goes here */}

          <Navbar />

          {/* When routing begins we would use the <Outlet/> functionality to render different pages */}

          <Home />
        </div>
      </main>
    </>
  );
}
