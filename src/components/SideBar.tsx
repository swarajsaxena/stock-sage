import React, { useState } from "react";
import { Menu, Grid, DollarSign, Plus, ChevronRight, ChevronLeft } from "react-feather";
import { Divider } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
	const [sideBarOpen, setSideBarOpen] = useState(false);
	const links = [
		{ to: "", text: "Dashboard", icon: <Grid className='w-4' /> },
		{ to: "stock", text: "Stock", icon: <DollarSign className='w-4' /> },
	];
	return (
		<div className='flex gap-2 flex-col w-min transition-all px-2 py-2 border-r border-purpleDark/10 bg-white rounded-tr-md'>
			<button
				className={`aspect-square grid place-content-center p-2 ${
					sideBarOpen ? "ml-auto" : "mx-auto"
				} hover:bg-purple/10 bg-purple/0 rounded-full h-min transition-all`}
				onClick={() => setSideBarOpen(!sideBarOpen)}
			>
				{sideBarOpen ? (
					<ChevronLeft className={`w-5`} color='#7048ec' />
				) : (
					<ChevronRight
						className={`w-5 ${sideBarOpen ? "ml-auto" : "mx-auto"}`}
						color='#7048ec'
					/>
				)}
			</button>
			<Divider />
			<div className='flex flex-col'>
				{links.map(link => (
					<Link to={link.to}>
						<SideBarIcon
							sideBarOpen={sideBarOpen}
							text={link.text}
							icon={link.icon}
							to={link.to}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SideBar;

interface SideBarIconI {
	text: string;
	icon: any;
	sideBarOpen: boolean;
	to: any;
}

const SideBarIcon = ({ text, icon, sideBarOpen, to }: SideBarIconI) => {
	let location = useLocation();
	return (
		<div
			className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md ${
				location.pathname === "/" + to
					? "text-purple bg-purple/5"
					: "text-gray-400"
			} hover:text-purple hover:bg-purple/10 transition-all`}
		>
			{icon}
			{sideBarOpen && <span className={`font-medium`}>{text}</span>}
		</div>
	);
};
