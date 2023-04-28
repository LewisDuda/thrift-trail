// Temporarily don't need to use

// import React from 'react';
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	PointElement,
// 	LineElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// // import faker from 'faker';
// import { useTheme } from 'next-themes';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// class Options {
// 	maintainAspectRatio: boolean;
// 	responsive: boolean;
// 	plugins: {
// 		legend: {
// 			position: string;
// 		};
// 		title: {
// 			display: boolean;
// 			text: string;
// 		};
// 	};
// 	scales: {
// 		x: {
// 			ticks: {
// 				color: string;
// 				font: {
// 					size: number;
// 				};
// 			};
// 			grid: {
// 				color: string;
// 			};
// 		};
// 		y: {
// 			ticks: {
// 				color: string;
// 				font: {
// 					size: number;
// 				};
// 			};
// 			grid: {
// 				color: string;
// 			};
// 		};
// 	};

// 	constructor(xTicksColor: string, xScalesGridColor: string, yTicksColor: string, yScalesGridColor: string) {
// 		this.maintainAspectRatio = false;
// 		this.responsive = true;
// 		this.plugins = {
// 			legend: {
// 				position: 'top',
// 			},
// 			title: {
// 				display: true,
// 				text: 'Chart.js Line Chart',
// 			},
// 		};
// 		this.scales = {
// 			x: {
// 				ticks: {
// 					color: xTicksColor,
// 					font: {
// 						size: 14,
// 					},
// 				},
// 				grid: {
// 					color: xScalesGridColor,
// 				},
// 			},
// 			y: {
// 				ticks: {
// 					color: yTicksColor,
// 					font: {
// 						size: 14,
// 					},
// 				},
// 				grid: {
// 					color: yScalesGridColor,
// 				},
// 			},
// 		};
// 	}
// }

// const lightModeOptions = new Options(
// 	'rgba(0, 0, 0, .7)', // xTicksColor
// 	'rgba(0, 0, 0, .3)', // xScalesGridColor
// 	'rgba(0, 0, 0, .7)', // yTicksColor
// 	'rgba(0, 0, 0, .3)' // yScalesGridColor
// );

// const darkModeOptions = new Options(
// 	'rgba(255, 255, 255, .7)',
// 	'rgba(255, 255, 255, .7)',
// 	'rgba(255, 255, 255, .7)',
// 	'rgba(255, 255, 255, .7)'
// );

// const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export const data = {
// 	labels,
// 	datasets: [
// 		{
// 			label: 'Dataset 1',
// 			data: [],
// 			// data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
// 			borderColor: 'rgb(255, 99, 132)',
// 			backgroundColor: 'rgba(255, 99, 132, 0.5)',
// 			tension: 0.4,
// 		},
// 		{
// 			label: 'Dataset 2',
// 			// data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
// 			data: [],
// 			borderColor: 'rgb(53, 162, 235)',
// 			backgroundColor: 'rgba(53, 162, 235, 0.5)',
// 			tension: 0.4,
// 		},
// 	],
// };

// export default function LineChart() {
// 	const { theme } = useTheme();
// 	const options = theme === 'dark' ? darkModeOptions : lightModeOptions; // 根據主題設定網線顏色

// 	return (
// 		<div className="w-full h-96 xl:w-1/2">
// 			<Line options={options as any} data={data} />
// 		</div>
// 	);
// }
