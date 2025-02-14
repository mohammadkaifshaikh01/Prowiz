import { RxDashboard } from "react-icons/rx";
import { CiDesktop } from "react-icons/ci";
import { MdOutlineImageSearch } from "react-icons/md";
import { FiX } from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      
      <div className="hidden md:flex flex-col bg-white shadow-md full-h-screen w-64 p-6">
      
        <div className="flex items-center justify-center mb-6">
          <img
            src="https://s3-alpha-sig.figma.com/img/0996/ab83/16c447b5c9b902c14889d917f4e93550?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DcWpkvJlgVsrngvWevtvWo4j1HapeM5GYR6Mv4poc3zND28pDnobbviZ-fAdhmjID-mIxuqwA54Nk1xqVg01GRA8Aj23u7hpJZYIhe1P7Rf9~MxeZTe0IkTF8bVryc8zpJKZIgqxI~V4X~EMSFWHGboneZgzLySF5uQRSLmEYWrZH9EOKJHQ0Fyn7fvCu84avMW1SLSoTF2z-LFnXxeTKS9aBqCiTQ9sr7P4ucgT1ONopt3gVHMLV1Ppb3YlIopt2hiAiTGyOaWf9~QBqw8kdxSMzF8C0BpQrcr~6rwx~J21KO8~RsBTB9BvxFYTLjjm-6CJHbGxDf3Gc2VlWk4mng__" 
            alt="Logo"
            className="h-15"
          />
        </div>

    
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

      
        <div className="flex items-center justify-center mb-6 mt-6">
          <img
            src="https://s3-alpha-sig.figma.com/img/0996/ab83/16c447b5c9b902c14889d917f4e93550?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DcWpkvJlgVsrngvWevtvWo4j1HapeM5GYR6Mv4poc3zND28pDnobbviZ-fAdhmjID-mIxuqwA54Nk1xqVg01GRA8Aj23u7hpJZYIhe1P7Rf9~MxeZTe0IkTF8bVryc8zpJKZIgqxI~V4X~EMSFWHGboneZgzLySF5uQRSLmEYWrZH9EOKJHQ0Fyn7fvCu84avMW1SLSoTF2z-LFnXxeTKS9aBqCiTQ9sr7P4ucgT1ONopt3gVHMLV1Ppb3YlIopt2hiAiTGyOaWf9~QBqw8kdxSMzF8C0BpQrcr~6rwx~J21KO8~RsBTB9BvxFYTLjjm-6CJHbGxDf3Gc2VlWk4mng__" 
            alt="Logo"
            className="h-10"
          />
        </div>

      
        <nav className="mt-6">
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
