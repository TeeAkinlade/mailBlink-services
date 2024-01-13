import { ResponsiveHeatMap } from '@nivo/heatmap';
import { HeatData as data } from './Data';

const HeatMap = () => {
	let innerWidth = window.innerWidth;
	let innerheight = window.innerHeight;
	// Dynamic value of margin based on window width
	let x = 90;

	if (innerWidth <= 768) {
		x = 150;
	} else if (innerWidth <= 1025) {
		x = 100; // Set x value
	} else {
		x = 90; // Set x value
	}

	return (
		<ResponsiveHeatMap
			data={data}
			theme={{
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
			}}
			margin={{ top: 20, right: x, bottom: 60, left: 90 }}
			valueFormat='>-.2s'
			axisTop={false}
			axisRight={false}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: '',
				legendPosition: 'middle',
				legendOffset: -72,
			}}
			colors={{
				type: 'diverging',
				scheme: 'blues',
				minValue: -100000,
				maxValue: 100000,
				divergeAt: 0.25,
			}}
			emptyColor='#555555'
			borderColor={{
				from: 'color',
				modifiers: [['darker', '0.8']],
			}}
			labelTextColor={{
				from: 'color',
				modifiers: [['brighter', '2.7']],
			}}
			legends={[]}
			enableLabels={true}
		/>
	);
};

export default HeatMap;
