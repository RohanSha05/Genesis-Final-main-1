import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`h-screen ${
				isOpen ? "w-64" : "w-20"
			} bg-gray-800 text-white transition-width duration-300`}
		>
			<div className="p-4 flex justify-between">
				<h1 className={`text-lg font-bold ${!isOpen && "hidden"}`}>
					Admin Panel
				</h1>
				<button onClick={toggleSidebar} className="focus:outline-none">
					{isOpen ? "←" : "→"}
				</button>
			</div>
			<nav>
				<ul className="menu space-y-4">
					<li>
						<details>
							<summary>Home</summary>
							<ul className="p-2">
								<li>
									<details>
										<summary>Banner</summary>
										<ul className="p-2">
											<li>
												<NavLink to="/dashboard/home/banner">
													Add Banner
												</NavLink>
											</li>
											<li>
												<NavLink to="/dashboard/about">Edit Banner</NavLink>
											</li>
											<li>
												<NavLink to="/dashboard/home/services">
													Show Banner
												</NavLink>
											</li>
											<li>
												<NavLink to="/dashboard/team">Delete Banner</NavLink>
											</li>
										</ul>
									</details>
								</li>
								<li>
									<NavLink to="/dashboard/about">About</NavLink>
								</li>
								<li>
									<NavLink to="/dashboard/home/services">Services</NavLink>
								</li>
								<li>
									<NavLink to="/dashboard/team">Team</NavLink>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>About</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Services</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Pages</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Contact</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<Link to="/" className="hover:bg-gray-700 block p-4">
							<span className={`${!isOpen && "hidden"}`}>Dashboard</span>
						</Link>
					</li>
					<li>
						<Link to="/reports" className="hover:bg-gray-700 block p-4">
							<span className={`${!isOpen && "hidden"}`}>Reports</span>
						</Link>
					</li>
					<li>
						<Link to="/users" className="hover:bg-gray-700 block p-4">
							<span className={`${!isOpen && "hidden"}`}>Users</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
