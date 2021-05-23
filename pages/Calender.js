import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FiHardDrive } from "react-icons/fi";

function Calender() {
  return (
    <>
      <div className="calender rounded-2xl bg-white flex-shrink-0 mt-pxl-24 pt-pxl-31 mx-auto px-pxl-23">
        <div className="calender-header flex items-center  pb-pxl-23">
          <div className="flex items-center mr-pxl-34">
            <span className="font-bold text-fs-18px text-purple-800 mr-pxl-18">
              May
            </span>
            <span className="font-bold text-fs-18px text-purple-800">2021</span>
          </div>
          <div className="time-category flex items-center space-x-2">
            <button className="font-semibold flex items-center justify-center text-fs-9px text-purple-800 border border-gray-200 bg-gray-100 w-pxl-55 h-pxl-22 p-pxl-11 rounded-full hover:bg-gray-200">
              Day
            </button>
            <button className="font-semibold flex items-center justify-center text-fs-9px text-purple-800 border border-gray-200 bg-gray-100 w-pxl-55 h-pxl-22 p-pxl-11 rounded-full hover:bg-gray-200">
              week
            </button>
            <button className="font-semibold flex items-center justify-center text-fs-9px text-purple-800 border border-gray-200 bg-gray-200 w-pxl-55 h-pxl-22 p-pxl-11 rounded-full hover:bg-gray-200">
              Month
            </button>
            <button className="font-semibold flex items-center justify-center text-fs-9px text-purple-800 border border-gray-200 bg-gray-100 w-pxl-55 h-pxl-22 p-pxl-11 rounded-full hover:bg-gray-200">
              Year
            </button>
          </div>
          <div className="flex items-center">
            <FiHardDrive size={24} className="text-gray-300 ml-32 mr-pxl-38" />
            <MdKeyboardArrowLeft
              size={24}
              className="text-purple-600 mr-pxl-24"
            />
            <MdKeyboardArrowRight size={24} className="text-purple-600" />
          </div>
        </div>
        <div className="days flex items-center space-x-12 pb-pxl-14 ml-pxl-12">
          <span className="font-semibold text-fs-11px text-purple-500">
            Monday
          </span>
          <span className="font-semibold text-fs-11px text-purple-500">
            Tuesday
          </span>
          <span className="font-semibold text-fs-11px text-purple-500">
            Wednesday
          </span>
          <span className="font-semibold text-fs-11px text-purple-500">
            Thursday
          </span>
          <span className="font-semibold text-fs-11px text-purple-500">
            Friday
          </span>
          <span className="font-semibold text-fs-11px text-purple-500">
            Saturday
          </span>
          <span className="font-semibold text-fs-11px text-purple-500">
            Sunday
          </span>
        </div>

        <div className="date flex  flex-shrink-0 flex-wrap pb-pxl-26">
          <div className="flex mr-pxl-10 flex-shrink-0 mb-2 w-pxl-80 h-pxl-71 bg-gray-100 border-2 border-gray-100 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-gray-400">31</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">1</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">2</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">3</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">4</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">5</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">6</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">7</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">8</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">9</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">10</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">11</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">12</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">13</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">14</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">15</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">16</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">17</span>
          </div>

          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">18</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">19</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">20</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">21</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">22</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">23</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">24</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">25</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">26</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">27</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">28</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">29</span>
          </div>
          <div className="flex mr-pxl-10 mb-2 flex-shrink-0 w-pxl-80 h-pxl-71 bg-white border-2 border-purple-200 rounded-lg pl-pxl-11 pt-pxl-4">
            <span className=" text-fs-12px font-bold text-purple-600">30</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calender;
