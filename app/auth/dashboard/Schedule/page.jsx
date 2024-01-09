'use client';

import React, { useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { formatDate } from '@fullcalendar/core'; 

const page = () => {
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
		<main className='flex flex-col px-8'>
			<div className='flex flex-col gap-y-2 mb-8'>
				<h2 className='text-2xl text-ui_secondary1 font-[700]'>CALENDAR</h2>
				<p className='text-[0.8rem] text-primaryBlack font-[400] dark:text-slate-500'>
					Manage your schedules and events effectively
				</p>
			</div>

			<div className='flex flex-col justify-between items-start md:flex-row gap-y-8 '>
				{/* SCHEDULE SIDEBAR */}
				<div className='flex-[1_1_20%] bg-ui_primary p-8 rounded-md h-[70vh] w-full'>
					<h5 className='text-white text-[1rem] '>Events</h5>
					<ul>
						{currentEvents.map((event) => (
							<li
								key={event.id}
								className='bg-teal-500  my-4 p-4 rounded-md text-white text-[0.8rem] hover:scale-110 ease-out duration-500 cursor-pointer'
								// onClick={handleEventClick}
							>
								<p>
									{' '}
									{event.title}{' '}
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

export default page;
