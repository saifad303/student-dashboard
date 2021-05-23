import { useEffect } from "react";
import * as Ri from "react-icons/ri";

const Sidebar = ({ isSideBar, setIsSidebar }) => {
  const showSideHandler = () => {
    setIsSidebar(!isSideBar);
  };

  useEffect(() => {
    console.log(isSideBar);
  }, []);

  return (
    <>
      <div
        className={`nav-bar h-screen fixed bg-indigo-900 top-0  ${
          isSideBar ? "left-0" : "-left-full"
        }`}
      >
        <button
          className="arrow items-center ml-48 mt-4"
          onClick={showSideHandler}
        >
          <img
            src="/images/eva_arrow-ios-downward-fill.png"
            alt=""
            className="w-8"
          />
        </button>
        <a
          href="http://localhost:3000/"
          className="flex items-center justify-center"
        >
          <img src="/images/Logo.png" alt="logo" className=" h-pxl-58" />
        </a>
        <div className="nav-menu h-screen overflow-y-scroll">
          <div className="flex items-center w-full mt-pxl-47 mb-pxl-31">
            <div className="bg-red-500 h-8 w-1 rounded-full"></div>
            <div>
              <Ri.RiDashboardLine
                size={22}
                className="text-white ml-12 mr-2 opacity-5"
              />
            </div>
            <a
              href="http://localhost:3000/"
              className="text-lg text-white font-semibold"
            >
              Dashboard
            </a>
          </div>
          <div className=" mb-pxl-36">
            <a href="" className="flex items-center">
              <div className="ml-pxl-42">
                <img
                  src="/images/fluent_class-24-regular.png"
                  className="w-pxl-23"
                  alt=""
                />
              </div>
              <span className=" text-purple-400 font-medium text-lg ml-pxl-14">
                Courses
              </span>
            </a>
          </div>
          <div className=" mb-pxl-36">
            <a href="" className="flex items-center">
              <div className="ml-pxl-42">
                <img
                  src="/images/ion_documents-outline.png"
                  className=" w-pxl-23"
                  alt=""
                />
              </div>
              <span className=" text-purple-400 font-medium text-lg ml-pxl-14">
                Materials
              </span>
            </a>
          </div>
          <div className=" mb-pxl-36">
            <a href="" className="flex items-center">
              <div className="ml-pxl-42">
                <img
                  src="/images/uil_schedule.png"
                  className=" w-pxl-23"
                  alt=""
                />
              </div>
              <span className=" text-purple-400 font-medium text-lg ml-pxl-14">
                Calender
              </span>
            </a>
          </div>
          <div className=" mb-pxl-36">
            <a href="" className="flex items-center">
              <div className="ml-pxl-42">
                <img
                  src="/images/tabler_certificate.png"
                  className=" w-pxl-23"
                  alt=""
                />
              </div>
              <span className=" text-purple-400 font-medium text-lg ml-pxl-14">
                Transcript
              </span>
            </a>
          </div>
          <div className=" mb-pxl-36">
            <a href="" className="flex items-center">
              <div className="ml-pxl-42">
                <img
                  src="/images/bx_bx-star.png"
                  className=" w-pxl-23"
                  alt=""
                />
              </div>
              <span className=" text-purple-400 font-medium text-lg ml-pxl-14">
                Grades
              </span>
            </a>
          </div>
          <div className=" mb-pxl-36">
            <a href="" className="flex items-center">
              <div className="ml-pxl-42">
                <img
                  src="/images/bi_person-check.png"
                  className=" w-pxl-23"
                  alt=""
                />
              </div>
              <span className=" text-purple-400 font-medium text-lg ml-pxl-14">
                Attendance
              </span>
            </a>
          </div>
          <div className="pb-pxl-99">
            <a href="" className="flex items-center">
              <div className="ml-pxl-42">
                <img src="/images/setting.png" className=" w-pxl-23" alt="" />
              </div>
              <span className=" text-purple-400 font-medium text-lg ml-pxl-14">
                Settings
              </span>
            </a>
          </div>
          <div className="w-full h-10 flex items-center justify-center mb-56 mt-pxl-36">
            <div className="sidebar-text w-44 rounded-lg relative">
              <img
                src="/images/Standard Collection 5.png"
                className=" w-28 absolute right-0 bottom-0"
                alt=""
              />
              <div className="flex-col flex-wrap pl-pxl-21 pt-pxl-60 pb-pxl-30">
                <span className=" leading-7">
                  <span className="text-base text-white">
                    Level up your skills,
                  </span>{" "}
                  <span className="text-lg font-medium text-white">
                    Software Engineering MasterTrack® Certificate
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
