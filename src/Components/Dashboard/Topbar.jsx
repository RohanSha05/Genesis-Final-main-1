const Topbar = () => {
	return (
		<div className="w-full bg-white p-4 shadow-md flex justify-between items-center">
			<h2 className="text-xl font-semibold">Dashboard</h2>
			<div className="flex items-center space-x-4">
				<button className="bg-gray-200 p-2 rounded-full">🔔</button>
				<div className="bg-gray-200 p-2 rounded-full">👤</div>
			</div>
		</div>
	);
};

export default Topbar;
