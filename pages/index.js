import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import TinySidebar from "./TinySidebar";
import ShortSidebar from "./ShortSidebar";
import Topnav from "./Topnav";
import StudySummery from "./StudySummery";
import OtherContent from "./OtherContent";
import Calender from "./Calender";
import Chat from "./Chat";
import MiniChat from "./MiniChat";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
}

export default function Home() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [isSideBar, setIsSidebar] = useState(true);
  const [isTinySidebar, setIsTinysidebar] = useState(false);

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log(windowDimensions.width);
  }, []);

  const showSidebarHandler = () => {
    setIsTinysidebar(!isTinySidebar);
    console.log(!isTinySidebar);
  };
  return (
    <>
      {isTinySidebar ? (
        <div
          onClick={() => setIsTinysidebar(!isTinySidebar)}
          className="black-overlay absolute left-0 top-0 h-full w-full z-10"
        ></div>
      ) : (
        ""
      )}

      <div className={`${isTinySidebar ? "bg-black opacity-5" : ""}`}>
        <div className={`full-page`}>
          {windowDimensions.width >= 1310 && isSideBar ? (
            <Sidebar
              isSideBar={isSideBar}
              setIsSidebar={setIsSidebar}
              isTinySidebar={isTinySidebar}
            />
          ) : (
            <ShortSidebar isSideBar={isSideBar} setIsSidebar={setIsSidebar} />
          )}

          {isSideBar === false || windowDimensions.width < 1310 ? (
            <ShortSidebar isSideBar={isSideBar} setIsSidebar={setIsSidebar} />
          ) : (
            ""
          )}

          <TinySidebar
            isTinySidebar={isTinySidebar}
            setIsTinysidebar={setIsTinysidebar}
          />

          {windowDimensions.width <= 375 ? (
            <button
              onClick={showSidebarHandler}
              className=" w-pxl-48 h-pxl-51 z-20 absolute bg-indigo-900 flex items-center justify-center"
            >
              <img
                src="/images/Standard Collection_red 5.png"
                className=" w-pxl-22"
                alt=""
              />
            </button>
          ) : (
            ""
          )}

          <div className="main-content ml-60">
            <Topnav />
            <div className="bg-gray-100">
              <div className="container mx-auto pr-pxl-15 pl-pxl-20 flex justify-center pt-pxl-47">
                <div className="page-content ">
                  <StudySummery />
                  <div className="other-content flex">
                    <OtherContent />
                  </div>
                  <Calender />
                </div>
                {windowDimensions.width >= 1200 ? <Chat /> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MiniChat />
    </>
  );
}
