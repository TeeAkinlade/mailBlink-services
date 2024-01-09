import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { BarData as data } from './Data';

const BarChart = () => {
	let innerWidth = window.innerWidth;
	let innerheight = window.innerHeight;
	// Dynamic value of margin based on window width
	let x;

	if (innerWidth <= 768) {
		x = 2;
		if (innerWidth === 768 && innerheight === 1024) {
			x = 300;
		} else x = 2; // Set x value
	} else if (innerWidth <= 1025) {
		x = 100; // Set x value
	} else {
		x = 0; // Set x value
	}
	const darkMode = () => {
		// Retrieve 'theme' value from localStorage
		const storedTheme = localStorage.getItem('theme');
		// Check if 'theme' exists and return true/false accordingly
		if (storedTheme === 'dark') return true;
		// return storedTheme === 'dark';
	};
	return (
		<ResponsiveBar
			data={data}
			theme={
				darkMode && {
					axis: {
						domain: {
							line: {
								stroke: 'rgb(100 116 139)',
							},
						},
						legend: {
							text: {
								fill: 'rgb(100 116 139)',
							},
						},
						ticks: {
							line: {
								stroke: 'rgb(100 116 139)',
								strokeWidth: 1,
							},
							text: {
								fill: 'rgb(100 116 139)',
							},
						},
					},
				}
			}
			keys={[
				'Sunday',
				'Saturday',
				'Friday',
				'Thursday',
				'Wednesday',
				'Tuesday',
				'Monday',
			]}
			indexBy='country'
			margin={{ top: 10, right: x, bottom: 40, left: 60 }}
			padding={0.3}
			groupMode='grouped'
			valueScale={{ type: 'linear' }}
			indexScale={{ type: 'band', round: true }}
			colors={{ scheme: 'blues' }}
			defs={[
				{
					id: 'dots',
					type: 'patternDots',
					background: 'inherit',
					color: '#38bcb2',
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: 'lines',
					type: 'patternLines',
					background: 'inherit',
					color: '#eed312',
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			fill={[
				{
					match: {
						id: 'Wednesday',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'Friday',
					},
					id: 'lines',
				},
				{
					match: {
						id: 'Sunday',
					},
					id: 'dots',
				},
			]}
			borderColor='red'
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Day',
				legendPosition: 'middle',
				legendOffset: 32,
				truncateTickAt: 0,
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Subscribers',
				legendPosition: 'middle',
				legendOffset: -40,
				truncateTickAt: 0,
			}}
			enableLabel={false}
			labelSkipWidth={12}
			labelSkipHeight={7}
			labelTextColor='blue'
			legends={[]}
			tooltip={() => {
				return (
					<div className='w-fit h-fit bg-ui_primary text-accent_4 p-3'>
						Metrics
					</div>
				);
			}}
			isFocusable={true}
			role='application'
			ariaLabel='subscriber chart'
			barAriaLabel={(e) =>
				e.id + ': ' + e.formattedValue + ' in day: ' + e.indexValue
			}
		/>
	);
};

export default BarChart;
