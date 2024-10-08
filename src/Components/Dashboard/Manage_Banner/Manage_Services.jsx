import { Link } from "react-router-dom";

const Manage_Services = () => {
	return (
		<div className="flex">
			<div>
				<ul className="menu bg-base-200 w-56">
					<li>
						<Link>Add Service</Link>
					</li>
					<li>
						<Link>Edit Service</Link>
					</li>
					<li>
						<a>Show Service</a>
					</li>
					<li>
						<a>Delete Service</a>
					</li>
				</ul>
			</div>
			<div>
				<h1>Add Service</h1>
				<p>Here you can add Service</p>
			</div>
		</div>
	);
};

export default Manage_Services;
