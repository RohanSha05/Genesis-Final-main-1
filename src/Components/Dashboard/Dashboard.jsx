const Dashboard = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<div className="card bg-white shadow-md p-6">
					<h2 className="text-lg font-bold">Services</h2>
					<p className="mt-2 text-4xl font-bold">120</p>
				</div>
				<div className="card bg-white shadow-md p-6">
					<h2 className="text-lg font-bold">Tasks</h2>
					<p className="mt-2 text-4xl font-bold">32</p>
				</div>
				<div className="card bg-white shadow-md p-6">
					<h2 className="text-lg font-bold">Users</h2>
					<p className="mt-2 text-4xl font-bold">47</p>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
