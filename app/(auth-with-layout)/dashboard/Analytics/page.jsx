'use client';
import React from 'react';
import BarChart from '../Charts/BarChart';
import { SlPeople } from 'react-icons/sl';
import RadialChart from '../Charts/RadialChart';
import HeatMap from '../Charts/Heatmap';

const analytics = () => {
	return (
		<div className='p-7 text-2xl flex-1 flex-col h-screen text-black leading-8 py-2 gap-y-2 mt-16 flex-wrap'>
			<div className='flex flex-col gap-4 items-start justify-start'>
				{' '}
				<h3 className='text-[0.8rem] leading-[1.12rem] lg:text-xl text-black lg:leading-7 dark:text-dark_text'>
					Welcome to our analytics dashboard, where data transforms into
					actionable{' '}
					<strong className='text-ui_secondary1 dark:text-[#14F5C8]'>
						insights!{' '}
					</strong>{' '}
				</h3>{' '}
				<p className='text-[0.67rem] lg:text-sm text-primaryBlack dark:text-slate-500 leading-3'>
					Dive into real-time analytics, visualize trends, and uncover valuable
					patterns that drive your business forward. Explore the power of data
					at your fingertips!
				</p>
			</div>
			<div className='grid grid-cols-1 xl:grid-cols-3 mt-8 md:gap-x-10 gap-y-8'>
				<div className='flex flex-col col-span-2 gap-y-4 bg-white dark:bg-dark_secondary shadow-md cursor-pointer p-4 rounded-xl pb-4 mt-8 '>
					<div className='flex justify-between items-center'>
						{' '}
						<h2 className='text-[1rem] text-ui_primary dark:text-ui_button font-[600]'>
							Subscriber Count
						</h2>
					</div>

					<div className='flex gap-2 '>
						<span className='text-ui_button bg-[#6aacf844] rounded-xl flex items-center p-2 px-4 '>
							<SlPeople />
						</span>
						<span className='flex flex-col gap-0 text-[0.8rem] font-[700] dark:text-dark_text leading-5'>
							<h3>Something I'm not every sure of</h3>

							<p className='text-slate-500 text-[0.8rem] font-[400]'>
								<strong>2670</strong> Overall Subscriber count
							</p>
						</span>
					</div>

					<div className='flex items-center justify-start md:w-[45rem] h-[15rem] p-0 relative z-1'>
						<BarChart />
					</div>
				</div>
				<div className='flex flex-col gap-y-4 bg-white dark:bg-dark_secondary shadow-md cursor-pointer p-4 px-6 rounded-xl pb-4 md:mt-10 col-span-1'>
					<span className='flex flex-col'>
						<h3 className='text-[1rem] leading-6 font-[600] dark:text-ui_button'>
							Contact Demographic
						</h3>
						<p className='text-[0.7rem] text-slate-500'>
							Visualization of the contacts you've made over time
						</p>
					</span>

					<div className='  md:w-[45rem] h-[18rem] flex justify-center items-center overflow-hidden  relative z-1'>
						<RadialChart />
					</div>
				</div>
			</div>

			<div className='flex flex-col col-span-2 gap-y-4 bg-white dark:bg-dark_field shadow-md cursor-pointer p-4 rounded-xl pb-4 mt-8 overflow-hidden'>
				<div className='flex flex-col justify-start items-start w-full'>
					<h2 className='text-[1rem] text-ui_primary font-[600] mb-2 dark:text-ui_button'>
						Activity Map
					</h2>
					<p className='text-[0.7rem] text-slate-500 leading-[1rem] dark:text-slate-500'>
						A look into the activity visualization spanning an entire year
						across top countries
					</p>
				</div>

				<div className='flex items-center justify-start w-[31rem] md:w-[45rem]  lg:w-full h-[13.5rem] md:h-[25rem] p-0 left-[-15%] top-[-12%] md:left-0 md:top-0 relative z-1'>
					<HeatMap />
				</div>
			</div>
		</div>
	);
};

export default analytics;
