'use client';

import React, { useState, useEffect } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { formatDate } from '@fullcalendar/core';

const Schedule = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

	useEffect(() => {
		const fctoolbar = document.querySelector('.fc-toolbar-title');

		if (theme === 'dark') {
			fctoolbar.style.color = '#0070f0';
		} else {
			fctoolbar.style.color = '#089373';
		}
	}, [theme]);


	const [currentEvents, setCurrentEvents] = useState([]);
	const handleDateClick = (selected) => {
		const title = prompt('Enter new title for your event');
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
	};
	const handleEventClick = (selected) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${selected.event.title}'`
			)
		) {
			selected.event.remove();
		}
	};

	return (
		<main className='flex flex-col px-8 calendarPosition'>
			<div className='flex flex-col gap-y-2 mb-8'>
				<h2 className='text-2xl text-ui_secondary1 dark:text-db_light_secondary font-[700]'>
					CALENDAR
				</h2>
				<p className='text-[0.8rem] text-primaryBlack font-[400] dark:text-slate-500'>
					Manage your schedules and events effectively
				</p>
			</div>

			<div className='flex flex-col justify-between items-start md:flex-row gap-y-8 '>
				{/* SCHEDULE SIDEBAR */}
				<div className='flex-[1_1_20%] bg-ui_secondary1  dark:bg-dark_primary px-8 pb-8 pt-5 rounded-md h-[70vh] w-full'>
					<h5 className='text-white dark:text-dark_text font-[700] text-[1rem] mb-2 '>
						EVENTS
					</h5>
					<ul>
						{currentEvents.map((event) => (
							<li
								key={event.id}
								className='bg-[#fffffff0] dark:bg-[#4cceac] max-w-[15rem] shadow-xl  overflow-hidden my-4 p-4 rounded-md text-slate-500 dark:text-white text-[0.8rem] hover:scale-110 ease-out duration-500 cursor-pointer'
								// onClick={() => calendarApi.gotoDate(event.date)}
							>
								<p>
									{' '}
									<span className='text-ui_secondary1 dark:text-white'>
										{' '}
										{event.title}{' '}<br/>
									</span>
									<span>
										{formatDate(event.start, {
											year: 'numeric',
											month: 'short',
											day: 'numeric',
										})}
									</span>
									{console.log(event)}
								</p>
							</li>
						))}
					</ul>
				</div>

				{/* CALENDAR */}

				<div className='flex-[1_1_100%] ml-4'>
					<FullCalendar
						height='70vh'
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin,
						]}
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
						}}
						initialView='dayGridMonth'
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						select={handleDateClick}
						eventClick={handleEventClick}
						eventsSet={(events) => setCurrentEvents(events)}
						initialEvents={[
							{
								id: '12315',
								title: 'All-day event',
								date: '2022-09-14',
							},
							{
								id: '5123',
								title: 'Timed event',
								date: '2022-09-28',
							},
						]}
					/>
				</div>
			</div>
		</main>
	);
};

export default Schedule;
