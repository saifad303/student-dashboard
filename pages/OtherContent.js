import { useEffect, useState } from "react";
import { BsThreeDots, BsCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

function OtherContent() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <>
      {width <= 375 ? (
        <div className=" mb-pxl-10 course-date rounded-3xl shadow-xl bg-white left-pxl-9 -bottom-pxl-82 flex items-center justify-between">
          <div className=" ml-pxl-19">
            <span className="block text-fs-18px font-medium text-blue-900 mb-pxl-2 mt-pxl-21">
              UX Research - Week 3
            </span>
            <span className=" mb-pxl-10 block uppercase text-gray-400 text-fs-14px">
              certificate ui/ux design
            </span>
            <div className="flex items-center mb-pxl-24 space-x-2">
              <AiOutlineClockCircle className="text-red-500" size={24} />
              <span className=" italic text-fs-14px text-red-500 capitalize">
                in progress
              </span>

              <p className="font-semibold text-fs-14px text-purple-700 pl-pxl-25">
                Join now
              </p>
            </div>
          </div>
          <div className="mr-pxl-19 leading-5">
            <p className=" text-gray-500 text-fs-28px font-semibold w-1 ml-pxl-26">
              08
            </p>
            <p className=" text-gray-500 text-fs-16px font-semibold uppercase ml-pxl-19">
              April
            </p>
          </div>
        </div>
      ) : (
        <div className="course bg-white rounded-3xl relative">
          <img
            src="/images/Rectangle 26.png"
            className="mx-auto mt-pxl-20"
            alt=""
          />
          <div className="blue-mark flex-col items-center justify-center checked-in absolute top-pxl-20 left-52 bg-purple-800 h-pxl-59 w-pxl-64 rounded-lg rounded-t-none">
            <BsCheck className=" text-green-700 mx-auto" size="40" />
            <div className=" text-fs-10px text-white font-medium ml-pxl-8 block">
              checked in
            </div>
          </div>

          <div className="course-date rounded-3xl shadow-xl bg-white absolute left-pxl-9 -bottom-pxl-82 flex items-center justify-between">
            <div className=" ml-pxl-19">
              <span className="block text-fs-18px font-medium text-blue-900 mb-pxl-2 mt-pxl-21">
                UX Research - Week 3
              </span>
              <span className=" mb-pxl-10 block uppercase text-gray-400 text-fs-14px">
                certificate ui/ux design
              </span>
              <div className="flex items-center mb-pxl-24 space-x-2">
                <AiOutlineClockCircle className="text-red-500" size={24} />
                <span className=" italic text-fs-14px text-red-500 capitalize">
                  in progress
                </span>

                <p className="font-semibold text-fs-14px text-purple-700 pl-pxl-25">
                  Join now
                </p>
              </div>
            </div>
            <div className="mr-pxl-19 leading-5">
              <p className=" text-gray-500 text-fs-28px font-semibold w-1 ml-pxl-26">
                08
              </p>
              <p className=" text-gray-500 text-fs-16px font-semibold uppercase ml-pxl-19">
                April
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="timeline px-pxl-24 rounded-2xl  bg-white ml-pxl-25 self-start pb-pxl-20">
        <div className="flex items-center justify-between mt-pxl-24">
          <a href="" className=" text-fs-16px text-purple-700 font-medium">
            Upcoming Sessions
          </a>
          <button>
            <BsThreeDots size={20} className="text-gray-500" />
          </button>
        </div>
        <div className="date-class-time flex items-center mt-pxl-28 mb-pxl-28">
          <span className="date text-fs-14px font-normal text-purple-400 mr-pxl-60">
            Date
          </span>
          <span className="class text-fs-14px font-normal text-purple-400 mr-48">
            Class
          </span>
          <span className="time text-fs-14px font-normal text-purple-400">
            Time
          </span>
        </div>
        <div className="session-data flex items-center">
          <div className=" text-center">
            <p className="parg-1 text-fs-12px font-bold text-purple-800 pb-pxl-5">
              Tomorrow
            </p>
            <div className=" leading-5">
              <p className="parg-1 text-gray-400 font-bold text-fs-24px">09</p>
              <p className="parg-1 text-gray-400 font-semibold text-fs-14px">
                APRIL
              </p>
            </div>
          </div>
          <div className="session-data-info flex ml-pxl-19 justify-between rounded-2xl w-full cursor-pointer hover:bg-gray-50 hover:shadow-lg py-pxl-14 px-pxl-12">
            <div>
              <p className="text-purple-900 font-semibold text-fs-14px">
                Database and Information System
              </p>
              <p className="text-gray-400 font-normal text-fs-14px">
                Master of computer scince
              </p>
            </div>
            <span className="session-data-date self-center font-bold text-fs-9px text-purple-900 px-pxl-7 py-pxl-3 ml-pxl-8 bg-purple-100 rounded-full">
              08:30pm-1:00am
            </span>
          </div>
        </div>
        <hr className=" my-pxl-17" />
        <div className="session-data flex items-center">
          <div className=" text-center">
            <p className="parg-1 text-fs-12px font-bold text-purple-800 pb-pxl-5">
              Tomorrow
            </p>
            <div className=" leading-5">
              <p className="parg-1 text-gray-400 font-bold text-fs-24px">09</p>
              <p className="parg-1 text-gray-400 font-semibold text-fs-14px">
                APRIL
              </p>
            </div>
          </div>
          <div className="session-data-info flex ml-pxl-19 justify-between rounded-2xl w-full cursor-pointer hover:bg-gray-50 hover:shadow-lg py-pxl-14 px-pxl-12">
            <div>
              <p className="text-purple-900 font-semibold text-fs-14px">
                Database and Information System
              </p>
              <p className="text-gray-400 font-normal text-fs-14px">
                Master of computer scince
              </p>
            </div>
            <span className="session-data-date self-center font-bold text-fs-9px text-purple-900 px-pxl-7 py-pxl-3 ml-pxl-8 bg-purple-100 rounded-full">
              08:30pm-1:00am
            </span>
          </div>
        </div>
        <hr className=" my-pxl-17" />
        <div className="session-data flex items-center">
          <div className=" text-center">
            <p className="parg-1 text-fs-12px font-bold text-purple-800 pb-pxl-5">
              Tomorrow
            </p>
            <div className=" leading-5">
              <p className="parg-1 text-gray-400 font-bold text-fs-24px">09</p>
              <p className="parg-1 text-gray-400 font-semibold text-fs-14px">
                APRIL
              </p>
            </div>
          </div>
          <div className="session-data-info flex ml-pxl-19 justify-between rounded-2xl w-full cursor-pointer hover:bg-gray-50 hover:shadow-lg py-pxl-14 px-pxl-12">
            <div>
              <p className="text-purple-900 font-semibold text-fs-14px">
                Database and Information System
              </p>
              <p className="text-gray-400 font-normal text-fs-14px">
                Master of computer scince
              </p>
            </div>
            <span className="session-data-date self-center font-bold text-fs-9px text-purple-900 px-pxl-7 py-pxl-3 ml-pxl-8 bg-purple-100 rounded-full">
              08:30pm-1:00am
            </span>
          </div>
        </div>
        <hr className=" my-pxl-17" />
        <div className="session-data flex items-center">
          <div className=" text-center">
            <p className="parg-1 text-fs-12px font-bold text-purple-800 pb-pxl-5">
              Tomorrow
            </p>
            <div className=" leading-5">
              <p className="parg-1 text-gray-400 font-bold text-fs-24px">09</p>
              <p className="parg-1 text-gray-400 font-semibold text-fs-14px">
                APRIL
              </p>
            </div>
          </div>
          <div className="session-data-info flex ml-pxl-19 justify-between rounded-2xl w-full cursor-pointer hover:bg-gray-50 hover:shadow-lg py-pxl-14 px-pxl-12">
            <div>
              <p className="text-purple-900 font-semibold text-fs-14px">
                Database and Information System
              </p>
              <p className="text-gray-400 font-normal text-fs-14px">
                Master of computer scince
              </p>
            </div>
            <span className="session-data-date self-center font-bold text-fs-9px text-purple-900 px-pxl-7 py-pxl-3 ml-pxl-8 bg-purple-100 rounded-full">
              08:30pm-1:00am
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherContent;
