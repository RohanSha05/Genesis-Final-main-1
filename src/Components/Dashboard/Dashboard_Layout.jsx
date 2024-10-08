import Manage_Banner from "./Manage_Banner/Add_Banner";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="flex">
			{/*dashboard side bar */}
			<Sidebar />
			{/*dashboard side bar */}
			<div className="flex flex-col flex-grow">
				<Topbar />
				<main className="flex-grow p-6 bg-gray-100">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Layout;
