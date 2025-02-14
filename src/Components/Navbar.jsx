import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="h-16 p-4 flex items-center justify-between shadow-md bg-white">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden text-gray-700">
          <FiMenu size={24} />
        </button>
        <p className="text-xl font-semibold">KPI Tracker</p>
      </div>

      
      <div className="flex items-center gap-4">
        <img
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" 
          alt="User"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
    </div>
  );
};

export default Navbar;
