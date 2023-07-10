import React from "react";
import { useNavigate } from "react-router-dom";

const icons = [
  {link:''}
]

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-2 j h-full z-50">

      <div className="flex flex-col items-center mt-8">
      <div className=" h-[38px] w-[51px] text-left ">
        <img src="disneyLogo.svg" alt="" className=" h-full w-full " />
      </div>

      <div className="w-[90px] rounded-full h-[26px] pl-2  border border-yellow-600 text-yellow-600 mt-3 bg-[#27231E] cursor-pointer ">subscribe</div>
      </div>
      <div className="flex flex-col items-center gap-7 mt-[100px] cursor-pointer">
         <div className="flex items-center gap-3 cursor-pointer hover:scale-150 transition-all duration-300  p-1">
         <span className="text-xl text-blue-600"><ion-icon name="aperture" className=""></ion-icon></span>
         <p className="text-white text-xl font-semibold mb-2 hidden hover: ">My space</p>
         </div>
         {/* search icon */}
         <div className="flex items-center gap-3 cursor-pointer p-1 hover:scale-150 transition-all duration-300" onClick={e=>navigate('/search')}>
         <span className="text-xl text-white"><ion-icon name="search-outline"></ion-icon></span>
         <p className="text-white text-xl font-semibold mb-2 border hover:inline-block hidden ">search</p>
         </div>
         {/* home icon */}
         <div className="flex items-center gap-3 cursor-pointer p-1 hover:scale-150 transition-all duration-300" onClick={e=>navigate('/')}>
         <span className="text-xl text-white"><ion-icon name="home-outline"></ion-icon></span>
         <p className="text-white text-xl font-semibold mb-2 border hover:inline-block hidden ">search</p>
         </div>
         {/* tv shows icon */}
         <div className="flex items-center gap-3 cursor-pointer p-1 hover:scale-150 transition-all duration-300 ">
         <span className="text-xl text-white"><ion-icon name="tv-outline"></ion-icon></span>
         <p className="text-white text-xl font-semibold mb-2 border hover:inline-block hidden ">search</p>
         </div>
         {/* sports section */}
         <div className="flex items-center gap-3 cursor-pointer p-1 hover:scale-150 transition-all duration-300">
         <span className="text-xl text-white"><ion-icon name="football-outline"></ion-icon></span>
         <p className="text-white text-xl font-semibold mb-2 border hover:inline-block hidden ">search</p>
         </div>
      </div>
    </div>
  );
};

export default Navbar;
