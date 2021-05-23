import { AiOutlineSearch } from "react-icons/ai";
import { BsPencilSquare, BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";

const MiniChat = () => {
  return (
    <>
      <div className="mini-chat fixed rounded-3xl rounded-b-none flex items-center">
        <img
          src="/images/Ellipse 53.png"
          className=" ml-pxl-16 w-pxl-31"
          alt=""
        />
        <span className=" ml-pxl-12 text-fs-16px font-medium text-purple-100">
          Messaging
        </span>
        <AiOutlineSearch className=" ml-pxl-33 text-purple-100" size={16} />
        <BsPencilSquare className="text-purple-100 ml-pxl-17" size={16} />
        <BsThreeDots className="text-purple-100 ml-pxl-17" size={16} />
        <MdKeyboardArrowUp className="text-purple-100 ml-pxl-17" size={16} />
      </div>
    </>
  );
};

export default MiniChat;
