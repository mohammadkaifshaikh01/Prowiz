import axios from "axios";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [data, setData] = useState({}); 

	const fetchData = async () => {
		try {
			const res = await axios.get("http://localhost:8000/userData");	
			console.log(res.data);
			
			setData(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="h-16 p-4 flex items-center justify-between shadow-md"
			style={{ padding: "15px 30px" }}
		>
			<p>KPI Tracker</p>
			<div className="flex items-center gap-2">
				<img className="rounded-full w-8 h-8" src={data?.profilePicture || "default-avatar.png"} alt="user_profilePicture" />
				<p>{data?.name}</p>
			</div>
		</div>
	);
};

export default Navbar;
