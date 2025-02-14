import { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import Charts from "./Components/Charts";
import List from "./Components/List";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="w-full">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6 bg-white rounded-md mx-4 mt-4 flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <select className="w-full sm:w-60 h-10 border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Applications</option>
              <option value="completed">Completed</option>
            </select>
            <select className="w-full sm:w-60 h-10 border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Line Number</option>
              <option value="completed">Completed</option>
            </select>
            <select className="w-full sm:w-60 h-10 border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Reason For Rejection</option>
              <option value="completed">Completed</option>
            </select>
            <select className="w-full sm:w-60 h-10 border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select Date Range</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button className="cursor-pointer flex gap-1.5 px-5 py-3 bg-blue-600 text-white rounded-3xl font-semibold shadow-md w-full sm:w-auto justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
            >
              <g strokeWidth="0"></g>
              <g strokeLinejoin="round" strokeLinecap="round"></g>
              <g>
                <g>
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#ffffff"
                    d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                  ></path>
                </g>
              </g>
            </svg>
            Download
          </button>
        </div>
        <div className="p-8">
          <Content />
        </div>
        <div className="px-2">
          <Charts />
        </div>
        <div className="px-8">
          <List />
        </div>
      </div>
    </div>
  );
};

export default App;
