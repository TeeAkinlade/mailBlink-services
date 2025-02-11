import { ResponsiveRadialBar } from '@nivo/radial-bar';
import { Radialdata as data } from './Data';
import useDeviceSize from '@/hooks/useDeviceSize';

export default function RadialChart() {
	//

	const [innerWidth, innerheight] = useDeviceSize();

	// let innerWidth = window.innerWidth;
	// let innerheight = window.innerHeight;
	//   let innerWidth = 1000;
	//   let innerheight = 1000;
	// Dynamic value of margin based on window width
	let x;

	if (innerWidth <= 768) {
		x = -200;
		if (innerWidth === 768 && innerheight === 1024) {
			x = 300;
		} else x = 2; // Set x value
	} else if (innerWidth <= 1025) {
		x = 300; // Set x value
	} else {
		x = 420; // Set x value
	}

	return (
		<ResponsiveRadialBar
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
			valueFormat='>-.2f'
			startAngle={-3}
			endAngle={272}
			innerRadius={0.25}
			padding={0.25}
			cornerRadius={2}
			margin={{ top: 30, right: x, bottom: 30, left: 40 }}
			colors={{ scheme: 'category10' }}
			enableRadialGrid={false}
			enableCircularGrid={false}
			radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
			circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
			transitionMode='innerRadius'
			legends={[]}
			tooltip={() => {
				return (
					<div className='w-fit h-fit bg-ui_primary text-accent_4 p-3 relative z-50'>
						Metrics
					</div>
				);
			}}
		/>
	);
}
