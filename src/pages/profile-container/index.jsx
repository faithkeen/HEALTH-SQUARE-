import Logo from "../../assets/svg/health square pay logo 1.svg";
import Caret from "../../assets/svg/caret.svg";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="w-full py-[22px] md:px-[120px] px-4 flex items-center justify-between"
        style={{ boxShadow: " 0px -1px 1px 0px #0000001A inset" }}
      >
        <div className="logo hidden md:block">
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex gap-4 items-center">
          <Link
            to="/profile"
            onClick={() => setIsActive(true)}
            className={` relative font-[500] ${
              isActive
                ? " font-[700] after:content-[''] after:w-full after:h-[3px] after:bg-[#00BCD4] after:block after:mt-2 after:absolute"
                : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/profile/edit-user"
            onClick={() => setIsActive(false)}
            className={`relative font-[500] ${
              !isActive
                ? " font-[700] after:content-[''] after:w-full after:h-[3px] after:bg-[#00BCD4] after:block after:mt-2 after:absolute"
                : ""
            }`}
          >
            My Profile
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <img
            className="h-[25px] w-[25px] rounded-full"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg"
            alt="avatar"
          />
          <p className="text-[14px] text-gray-600">Micray Yuris Shalom</p>
          <div className="relative">
            <img
              src={Caret}
              alt="caret"
              className={`cursor-pointer transition-[transform] duration-300 ${
                isOpen ? "transform rotate-180 " : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="absolute top-[60px] right-0  w-[259px] p-2 flex flex-col  z-20">
                <button className="w-full text-center bg-white border border-[#E0E0E0] text-black block py-4 px-2">
                  Support
                </button>

                <button className="w-full  text-center bg-white border border-[#E0E0E0] border-solid text-black block  py-4 px-2  ">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {<Outlet />}
    </>
  );
};

export default Profile;
