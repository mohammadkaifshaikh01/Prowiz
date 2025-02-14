import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="h-16 p-4 flex items-center justify-between shadow-md bg-white">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden text-gray-700">
          <FiMenu size={24} />
        </button>
        <p>KPI Tracker</p>
      </div>
    </div>
  );
};

export default Navbar;
