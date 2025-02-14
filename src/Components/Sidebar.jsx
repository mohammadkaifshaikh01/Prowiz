import { RxDashboard } from "react-icons/rx";
import { CiDesktop } from "react-icons/ci";
import { MdOutlineImageSearch } from "react-icons/md";
import { FiX } from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className="hidden md:flex flex-col bg-white shadow-md full-h-screen w-64 p-6">
        <nav className="w-full">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
              <RxDashboard size={22} />
              <p className="text-lg font-medium">Dashboard</p>
            </li>
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
              <CiDesktop size={22} />
              <p className="text-lg font-medium">Camera View</p>
            </li>
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
              <MdOutlineImageSearch size={22} />
              <p className="text-lg font-medium">Event Log</p>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button className="absolute top-4 right-4 text-gray-700" onClick={toggleSidebar}>
          <FiX size={28} />
        </button>
        <nav className="mt-12">
          <ul className="space-y-6">
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-500 p-3 rounded-md cursor-pointer">
              <RxDashboard size={22} />
              <p className="text-lg font-medium">Dashboard</p>
            </li>
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-500 p-3 rounded-md cursor-pointer">
              <CiDesktop size={22} />
              <p className="text-lg font-medium">Camera View</p>
            </li>
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-500 p-3 rounded-md cursor-pointer">
              <MdOutlineImageSearch size={22} />
              <p className="text-lg font-medium">Event Log</p>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
