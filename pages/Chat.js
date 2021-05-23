import { BsSearch, BsThreeDots, BsPencilSquare } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";

function Chat() {
  return (
    <>
      <div className="chat-section ml-pxl-15 bg-white mt-pxl-47 rounded-2xl">
        <div className="chat-header flex items-center rounded-2xl rounded-b-none px-pxl-16 pt-pxl-11 pb-pxl-14 bg-gray-200 border-b border-gray-300">
          <div>
            <div className="profile-img relative">
              <img src="/images/Ellipse 53.png" className=" w-pxl-30" alt="" />
              <div className="online-status absolute w-pxl-8 h-pxl-8 -bottom-pxl-2 left-pxl-16 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <span className="text-fs-16px text-purple-900 font-medium ml-pxl-13">
            Messaging
          </span>
          <div className="flex items-center mt-pxl-6">
            <BsSearch size={16} className="text-gray-400 ml-pxl-20" />
            <BsPencilSquare size={16} className="text-gray-400 ml-pxl-17" />
            <BsThreeDots size={16} className="text-gray-400 ml-pxl-17" />
          </div>
        </div>
        <div className="px-pxl-16">
          <div className="friend-list flex flex-shrink-0 overflow-x-hidden pt-pxl-15 pb-pxl-15">
            <div className="friends-add text-center flex-shrink-0">
              <a href="">
                <AiFillPlusCircle
                  size={46}
                  className="text-gray-400 mb-pxl-3"
                />
              </a>
              <p className="font-normal text-fs-12px text-gray-400">Add</p>
            </div>
            <div className="text-center relative ml-pxl-20 flex-shrink-0">
              <img
                src="/images/Oval.png"
                className=" w-pxl-46 mb-pxl-3"
                alt=""
              />
              <img
                src="/images/Image.png"
                className="absolute top-pxl-4 left-pxl-4 w-pxl-38"
                alt=""
              />
              <p className="font-normal text-fs-12px text-gray-400">Dianne</p>
            </div>
            <div className="text-center relative ml-pxl-20 flex-shrink-0">
              <img
                src="/images/Oval.png"
                className=" w-pxl-46 mb-pxl-3"
                alt=""
              />
              <img
                src="/images/Image.png"
                className="absolute top-pxl-4 left-pxl-4 w-pxl-38"
                alt=""
              />
              <p className="font-normal text-fs-12px text-gray-400">Dianne</p>
            </div>
            <div className="text-center relative ml-pxl-20 flex-shrink-0">
              <img
                src="/images/Oval.png"
                className=" w-pxl-46 mb-pxl-3"
                alt=""
              />
              <img
                src="/images/Image.png"
                className="absolute top-pxl-4 left-pxl-4 w-pxl-38"
                alt=""
              />
              <p className="font-normal text-fs-12px text-gray-400">Dianne</p>
            </div>
            <div className="text-center relative ml-pxl-20 flex-shrink-0">
              <img
                src="/images/Oval.png"
                className=" w-pxl-46 mb-pxl-3"
                alt=""
              />
              <img
                src="/images/Image.png"
                className="absolute top-pxl-4 left-pxl-4 w-pxl-38"
                alt=""
              />
              <p className="font-normal text-fs-12px text-gray-400">Dianne</p>
            </div>
          </div>
          <hr />
          <div className=" mt-pxl-15 flex items-center mb-pxl-27">
            <img src="/images/f1.png" className=" w-pxl-47 mr-pxl-7" alt="" />
            <div className="">
              <span className="block text-fs-12px font-semibold mb-pxl-6 text-purple-900">
                Sophia kowalski
              </span>
              <span className="block text-fs-12px font-semibold text-purple-900">
                Thanks Mia, please Let me know when I can...
              </span>
            </div>
            <div className=" justify-end text-center flex-shrink-0">
              <span className=" mb-pxl-14 text-gray-400 font-normal text-fs-10px block w-pxl-45">
                3 min ago
              </span>
              <div className="bg-blue-700 rounded-full w-pxl-24 ml-pxl-12">
                <span className="text-white inline-block">1</span>
              </div>
            </div>
          </div>
          <hr />
          <div className=" mt-pxl-15 flex items-center mb-pxl-27">
            <img src="/images/f1.png" className=" w-pxl-47 mr-pxl-7" alt="" />
            <div className="">
              <span className="block text-fs-12px font-semibold mb-pxl-6 text-purple-900">
                Sophia kowalski
              </span>
              <span className="block text-fs-12px font-semibold text-purple-900">
                Thanks Mia, please Let me know when I can...
              </span>
            </div>
            <div className=" justify-end text-center flex-shrink-0">
              <span className=" mb-pxl-14 text-gray-400 font-normal text-fs-10px block w-pxl-45">
                3 min ago
              </span>
              <div className="bg-blue-700 rounded-full w-pxl-24 ml-pxl-12">
                <span className="text-white inline-block">1</span>
              </div>
            </div>
          </div>
          <hr />
          <div className=" mt-pxl-15 flex items-center mb-pxl-27">
            <img src="/images/f1.png" className=" w-pxl-47 mr-pxl-7" alt="" />
            <div className="">
              <span className="block text-fs-12px font-semibold mb-pxl-6 text-purple-900">
                Sophia kowalski
              </span>
              <span className="block text-fs-12px font-semibold text-purple-900">
                Thanks Mia, please Let me know when I can...
              </span>
            </div>
            <div className=" justify-end text-center flex-shrink-0">
              <span className=" mb-pxl-14 text-gray-400 font-normal text-fs-10px block w-pxl-45">
                3 min ago
              </span>
              <div className="bg-blue-700 rounded-full w-pxl-24 ml-pxl-12">
                <span className="text-white inline-block">1</span>
              </div>
            </div>
          </div>
          <hr />
          <div className=" mt-pxl-15 flex items-center mb-pxl-27">
            <img src="/images/f1.png" className=" w-pxl-47 mr-pxl-7" alt="" />
            <div className="">
              <span className="block text-fs-12px font-semibold mb-pxl-6 text-purple-900">
                Sophia kowalski
              </span>
              <span className="block text-fs-12px font-semibold text-purple-900">
                Thanks Mia, please Let me know when I can...
              </span>
            </div>
            <div className=" justify-end text-center flex-shrink-0">
              <span className=" mb-pxl-14 text-gray-400 font-normal text-fs-10px block w-pxl-45">
                3 min ago
              </span>
              <div className="bg-blue-700 rounded-full w-pxl-24 ml-pxl-12">
                <span className="text-white inline-block">1</span>
              </div>
            </div>
          </div>
          <hr />
          <div className=" mt-pxl-15 flex items-center mb-pxl-27">
            <img src="/images/f1.png" className=" w-pxl-47 mr-pxl-7" alt="" />
            <div className="">
              <span className="block text-fs-12px font-semibold mb-pxl-6 text-purple-900">
                Sophia kowalski
              </span>
              <span className="block text-fs-12px font-semibold text-purple-900">
                Thanks Mia, please Let me know when I can...
              </span>
            </div>
            <div className=" justify-end text-center flex-shrink-0">
              <span className=" mb-pxl-14 text-gray-400 font-normal text-fs-10px block w-pxl-45">
                3 min ago
              </span>
              <div className="bg-blue-700 rounded-full w-pxl-24 ml-pxl-12">
                <span className="text-white inline-block">1</span>
              </div>
            </div>
          </div>
          <hr />
          <div className=" mt-pxl-15 flex items-center mb-pxl-18">
            <img src="/images/f1.png" className=" w-pxl-47 mr-pxl-7" alt="" />
            <div className="">
              <span className="block text-fs-12px font-semibold mb-pxl-6 text-purple-900">
                Sophia kowalski
              </span>
              <span className="block text-fs-12px font-semibold text-purple-900">
                Thanks Mia, please Let me know when I can...
              </span>
            </div>
            <div className=" justify-end text-center flex-shrink-0">
              <span className=" mb-pxl-14 text-gray-400 font-normal text-fs-10px block w-pxl-45">
                3 min ago
              </span>
              <div className="bg-blue-700 rounded-full w-pxl-24 ml-pxl-12">
                <span className="text-white inline-block">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
