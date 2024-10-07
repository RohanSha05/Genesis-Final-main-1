import React, { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";
import { PiMagnifyingGlass } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdAddCall, MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const MobileNav = () => {
	const [showDiv, setShowDiv] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const handleCloseSidebar = () => {
		document.getElementById("my-drawer-4").checked = false;
	};

	const toggleDiv = (e) => {
		e.stopPropagation();
		if (!showDiv) {
			setShowDiv(true);
			setTimeout(() => {
				setIsVisible(true);
			}, 100);
		} else {
			setIsVisible(false);
			setTimeout(() => {
				setShowDiv(false);
			}, 300);
		}
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (showDiv && !event.target.closest(".dropdown")) {
				setIsVisible(false);
				setTimeout(() => {
					setShowDiv(false);
				}, 300);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [showDiv]);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<header>
			<nav className="navbar bg-[#F5F5F5] h-[99px]">
				<div className="flex items-center justify-between w-full"> {/* Added flex and justify-between */}
					<div className="dropdown mr-4"> {/* Added margin-right */}
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu uppercase dropdown-content bg-slate-900 text-white w-[350px] z-[1] mt-3"
						>
							<li>
								<details>
									<summary className="border-b-2 py-4">Home</summary>
									<ul className="p-2">
										<li>
											<a className="border-b-2 py-4">Submenu 1</a>
										</li>
										<li>
											<a className="border-b-2 py-4">Submenu 2</a>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<a className="border-b-2 py-4">About</a>
							</li>
							<li>
								<details>
									<summary className="border-b-2 py-4">Page</summary>
									<ul className="p-2">
										<li>
											<a className="border-b-2 py-4">Submenu 1</a>
										</li>
										<li>
											<a className="border-b-2 py-4">Submenu 2</a>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<details>
									<summary className="border-b-2 py-4">Services</summary>
									<ul className="p-2">
										<li>
											<a className="border-b-2 py-4">Submenu 1</a>
										</li>
										<li>
											<a className="border-b-2 py-4">Submenu 2</a>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<details>
									<summary className="border-b-2 py-4">Projects</summary>
									<ul className="p-2">
										<li>
											<a className="border-b-2 py-4">Submenu 1</a>
										</li>
										<li>
											<a className="border-b-2 py-4">Submenu 2</a>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<details>
									<summary className="border-b-2 py-4">News</summary>
									<ul className="p-2">
										<li>
											<a className="border-b-2 py-4">Submenu 1</a>
										</li>
										<li>
											<a className="border-b-2 py-4">Submenu 2</a>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div>

					<div className="ml-auto">
						<button className="text-blue-500" onClick={toggleDiv}>
							<PiMagnifyingGlass size={25} />
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default MobileNav;
