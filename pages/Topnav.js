import { BsSearch, BsThreeDotsVertical, BsFillBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

function Topnav() {
  return (
    <>
      <div className="top-nav flex items-center justify-between px-pxl-39 py-pxl-10">
        <div className="search flex items-center">
          <div className="search-child flex items-center">
            <BsSearch
              size={21}
              className="search-icon text-purple-600 mr-pxl-16"
            />
            <input
              type="text"
              placeholder="Search course students or instructor"
              className="search-input placeholder-gray-400 w-80 outline-none text-purple-900"
            />
          </div>
        </div>
        <div className="top-nav-right flex items-center border-l-2">
          <button className="bg-purple-500 p-pxl-6 rounded-full ml-pxl-35">
            <AiFillMessage className="text-white" size={18} />
          </button>
          <button className="bell bg-purple-500 p-pxl-6 rounded-full ml-pxl-13">
            <BsFillBellFill className="text-white" size={18} />
          </button>
          <img
            src="/images/Ellipse 53.png"
            className="w-pxl-40 ml-pxl-35"
            alt=""
          />
          <div className="user-name ml-pxl-12">
            <span className="block text-fs-16px font-semibold">Mia V</span>
            <span className=" text-fs-14px font-normal">Student</span>
          </div>
          <button type="button" className="ml-pxl-32 ThreeDots">
            <BsThreeDotsVertical className="text-gray-500" size={25} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Topnav;
