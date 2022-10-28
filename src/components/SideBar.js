import { RiHome5Fill, RiRadio2Fill } from "react-icons/ri";
import { MdSubscriptions } from "react-icons/md";
import { AiFillPicture, AiOutlineUser, AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiMusic } from "react-icons/fi";


function SideBar() {
  return (
    <div className="m-2 p-5 shadow">
      <FiMusic className="text-4xl text-orange-600 mb-4" />

      <div className="space-y-7  mt-10 bg-black p-3 h-[14em] rounded-2xl">
        <div>
          <Link to="/" className="">
            <RiHome5Fill
              className="text-gray-600 cursor-pointer hover:text-yellow-500"
              size={25}
            />
          </Link>
        </div>
        <div>
        <Link to="/library" className="">
          <MdSubscriptions
            className="text-gray-600 cursor-pointer hover:text-yellow-500"
            size={25}
          />
        </Link>
        </div>
        <div>
        <Link to="/Explore">
          <RiRadio2Fill
            className="text-gray-600 cursor-pointer hover:text-yellow-500"
            size={25}
          />
        </Link>
        </div>
        <div>
        <Link to="/Videos">
          <AiFillPicture
            className="text-gray-600 cursor-pointer hover:text-yellow-500"
            size={25}
          />
        </Link>
        </div>
      </div>
      <div className="mt-[30px] space-y-3  bg-black p-3 rounded-2xl">
        <AiOutlineUser
          className="text-gray-600 cursor-pointer hover:text-yellow-500"
          size={25}
        />
        <AiFillSetting
          className="text-gray-600 cursor-pointer hover:text-yellow-500"
          size={25}
        />
      </div>
    </div>
  );
}

export default SideBar;
