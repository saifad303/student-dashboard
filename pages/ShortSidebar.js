import * as Ri from "react-icons/ri";

const ShortSidebar = ({ isSideBar, setIsSidebar }) => {
  const showSideHandler = () => {
    setIsSidebar(!isSideBar);
  };
  return (
    <>
      <div className="short-sidebar h-screen fixed bg-indigo-900">
        <button onClick={showSideHandler} className=" ml-pxl-40">
          <img
            src="/images/Standard Collection_red 5.png"
            className="w-pxl-27 mt-pxl-48 mb-pxl-66"
            alt=""
          />
        </button>
        <a href="">
          <Ri.RiDashboardLine
            size={22}
            className="text-white mx-auto mb-pxl-31 "
          />
        </a>
        <a href="">
          <img
            src="/images/fluent_class-24-regular.png"
            className=" w-pxl-23 mx-auto mb-pxl-31 "
            alt=""
          />
        </a>
        <a href="">
          <img
            src="/images/ion_documents-outline.png"
            className=" w-pxl-23 mx-auto mb-pxl-31 "
            alt=""
          />
        </a>
        <a href="">
          <img
            src="/images/uil_schedule.png"
            className=" w-pxl-23 mx-auto mb-pxl-31 "
            alt=""
          />
        </a>
        <a href="">
          <img
            src="/images/tabler_certificate.png"
            className=" w-pxl-23 mx-auto mb-pxl-31 "
            alt=""
          />
        </a>
        <a href="">
          <img
            src="/images/bx_bx-star.png"
            className=" w-pxl-23 mx-auto mb-pxl-31 "
            alt=""
          />
        </a>
        <a href="">
          <img
            src="/images/bi_person-check.png"
            className=" w-pxl-23 mx-auto mb-pxl-31 "
            alt=""
          />
        </a>
        <a href="">
          <img
            src="/images/setting.png"
            className=" w-pxl-23 mx-auto mb-pxl-31 "
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default ShortSidebar;
