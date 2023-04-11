import "./App.css";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
	return (
		<div className='flex flex-col gap-[0.3rem] h-screen max-w-[100vw] overflow-hidden'>
			<Navbar />
			<div className='flex flex-1 gap-[0.3rem] w-[100%]'>
				<SideBar />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route
						path='/stock'
						element={
							<main className='p-4 bg-white rounded-tl-md'>
								Stock
							</main>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
