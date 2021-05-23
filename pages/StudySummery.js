import { BiCustomize } from "react-icons/bi";
import { BsThreeDots, BsCheck } from "react-icons/bs";

function StudySummery() {
  return (
    <>
      <div className="header flex items-center justify-between w-full mb-pxl-19">
        <a href="" className=" text-fs-21px font-bold text-purple-900">
          Hello, Mia!
        </a>
        <button className="customize-button flex items-center space-x-1">
          <BiCustomize size={17} className="text-purple-700" />
          <span className="text-fs-14px font-medium text-purple-700">
            customize
          </span>
        </button>
      </div>
      {/* page content header end */}
      <div className="programes w-full bg-white rounded-xl pt-pxl-26 px-pxl-25">
        <div className="flex items-center justify-between mb-pxl-23">
          <span className=" text-fs-16px font-medium text-purple-800">
            Active Programs
          </span>
          <BsThreeDots size={25} className="text-gray-400" />
        </div>
        <div className="program-list w-full">
          <div className="item flex items-center">
            <div className="flex w-96">
              <div>
                <img
                  src="/images/placeholder.png"
                  className=" w-pxl-75"
                  alt=""
                />
              </div>
              <div className="study-info ml-pxl-16">
                <span className="degree-title block uppercase text-white text-fs-10px font-semibold bg-blue-600 py-pxl-4 px-pxl-11 rounded-full mb-pxl-11">
                  Master of computer science.
                </span>

                <span className="college-name block text-fs-14px text-purple-900 font-bold">
                  University of upstate
                </span>
                <span className="campus-location block text-fs-14px text-purple-900 font-bold">
                  at Brookstone
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="grades text-center">
                <p className=" text-fs-36px text-gray-400 font-bold mb-pxl-7">
                  1
                </p>
                <p className=" text-fs-11px text-gray-400">
                  Overdue Assignment
                </p>
              </div>
              <div className="grades text-center">
                <p className=" text-fs-36px mb-pxl-7 text-gray-400 font-bold">
                  5
                </p>
                <p className="text-fs-11px text-gray-400">Overdue Assignment</p>
              </div>
              <div className="grades text-center">
                <p className=" text-fs-36px mb-pxl-7 text-gray-400 font-bold">
                  A-
                </p>
                <p className="text-fs-11px text-gray-400">Overdue Assignment</p>
              </div>
              <div className="text-center">
                <div className="percent">
                  <svg>
                    <circle cx="25" cy="25" r="25"></circle>
                    <circle cx="25" cy="25" r="25"></circle>
                  </svg>
                  <span className="absolute top-4 left-4 text-sm font-semibold text-gray-500">
                    87%
                  </span>
                </div>
                <span className="text-fs-11px text-gray-400">Completion</span>
              </div>
            </div>
          </div>
          <hr className=" my-pxl-28" />
          <div className="item flex items-center mb-pxl-28 pb-pxl-28">
            <div className="flex w-96">
              <div>
                <img
                  src="/images/placeholder2.png"
                  className=" w-pxl-75"
                  alt=""
                />
              </div>
              <div className="study-info ml-pxl-16">
                <span className="degree-title block uppercase text-white text-fs-10px font-semibold bg-blue-600 py-pxl-4 px-pxl-11 rounded-full mb-pxl-11">
                  Master of computer science.
                </span>

                <span className="college-name block text-fs-14px text-purple-900 font-bold">
                  University of upstate
                </span>
                <span className="campus-location block text-fs-14px text-purple-900 font-bold">
                  at Brookstone
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="grades text-center">
                <p className=" text-fs-36px text-gray-400 font-bold mb-pxl-7">
                  1
                </p>
                <p className=" text-fs-11px text-gray-400">
                  Overdue Assignment
                </p>
              </div>
              <div className="grades text-center">
                <p className=" text-fs-36px mb-pxl-7 text-gray-400 font-bold">
                  5
                </p>
                <p className="text-fs-11px text-gray-400">Overdue Assignment</p>
              </div>
              <div className="grades text-center">
                <p className=" text-fs-36px mb-pxl-7 text-gray-400 font-bold">
                  A-
                </p>
                <p className="text-fs-11px text-gray-400">Overdue Assignment</p>
              </div>
              <div className="text-center">
                <div className="percent">
                  <svg>
                    <circle cx="25" cy="25" r="25"></circle>
                    <circle cx="25" cy="25" r="25"></circle>
                  </svg>
                  <span className="absolute top-4 left-4 text-sm font-semibold text-gray-500">
                    87%
                  </span>
                </div>
                <span className="text-fs-11px text-gray-400">Completion</span>
              </div>
            </div>
          </div>
        </div>
        {/* program list end */}
      </div>
    </>
  );
}

export default StudySummery;
