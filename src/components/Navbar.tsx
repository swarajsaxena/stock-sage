import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className='px-4 py-2 bg-white flex items-center justify-between'>
			<div className='logo flex items-center gap-1'>
				<span className='text-2xl'>💸</span>
				<span className='font-semibold text-lg'>STOCKSAGE</span>
			</div>
			<div className='flex gap-2 items-center'>
				<NavSearch />
			</div>
		</div>
	);
};

export default Navbar;

const NavSearch = () => {
	return (
		<div className='flex items-center gap-2 rounded-xl p-1 bg-purple/10 border-purple/50 border-2 h-max hover:bg-purple/20 cursor-pointer'>
			<Search className='w-4 h-4 ml-1' />
			<span className="font-medium mr-3 text-sm">Search...</span>
      <span className="p-1 px-2 bg-purple/30 border-purple/50 border-2 font-mono font-bold text-purpleDark/70 h-max leading-[1rem] text-sm rounded-lg">Ctrl+K</span>
		</div>
	);
};
