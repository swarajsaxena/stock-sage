import { Divider } from "@mui/material";
import React from "react";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const Main = () => {
	const options = {
		layout: {
			padding: 0,
      width: '100%'
		},
		responsive: true,
		scales: {
			y: {
				min: -15,
				max: 20,
				stepSize: 1,
				ticks: {
					display: false,
				},
				grid: {
					display: false,
				},
				display: false,
			},
			x: {
				display: false,
				ticks: {
					display: false,
				},
				grid: {
					// display: false,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
			},
		},
		tooltips: {
			callbacks: {
				title: function (tooltipItem: any, data: any) {
					return data["labels"][tooltipItem[0]["index"]];
				},
			},
			backgroundColor: "#FFF",
			titleFontSize: 16,
			titleFontColor: "#0066ff",
			bodyFontColor: "#000",
			bodyFontSize: 14,
			displayColors: true,
		},
	};

	const labels = [
		"July",
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"July",
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"July",
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
	];

	const data = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: labels.map(() => Math.random() * 10),
				borderColor: "rgb(221, 99, 255)",
				tension: 0.5,
			},
		],
	};

	return (
		<main className='p-4 bg-white rounded-tl-md w-full flex flex-col gap-2'>
			<h1 className='text-2xl text-purpleDark italic font-semibold'>Dashboard</h1>
			<Divider />
			<div className="flex gap-2">
				<div className="flex-[0.8]">
					<div className="text-2xl text-purpleDark italic font-medium">Apple Inc</div>
					<div className='h-[500px] relative bg-gradient-to-b from-purple/0 to-purple/10 rounded-md'>
						<Line className="line-chart" style={{ width: '100%' }} options={options} data={data} />
					</div>
				</div>
        <div className="flex-[0.2]">hello</div>
			</div>
		</main>
	);
};

export default Main;
