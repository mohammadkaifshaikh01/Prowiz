import axios from "axios";
import { useEffect, useState } from "react";

const States = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/states");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-6 p-4">
      {data?.map((e, index) => (
        <div
          key={index}
          className="border border-gray-400 rounded-xl p-4 w-full sm:w-80 lg:w-64 flex flex-col items-left text-left bg-white shadow-sm"
        >
          <img src={e.icons} alt="icons" className="w-13 h-13 object-contain mb-2" />
          <p className="text-lg font-semibold">{e.name}</p>
          <p className="text-gray-500">{e.number}</p>
        </div>
      ))}
    </div>
  );
};

export default States;
