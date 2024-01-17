import Link from 'next/link';
import React from 'react'

const DashboardBtn = () => {
    return (
        <div className="flex flex-col-reverse 2lg:flex-row w-full gap-2">
          <Link
            href="/dashboard/Home"
            className="w-full rounded-[24px] border border-navyBlue bg-navyBlue px-6 py-2 text-center text-sm font-medium text-white duration-200 hover:border hover:border-navyBlue hover:bg-white hover:text-navyBlue"
          >
            Dashboard
          </Link>
        </div>
      );
}

export default DashboardBtn