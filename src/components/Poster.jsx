import React from "react";

const Poster = () => {
  return (
    <div className=" w-[96%] h-[260px] bg-[#111113] shadow-lg rounded-lg relative flex">
      <div>
        <img src="poster.jpg" alt="" className=" h-full rounded-lg" />
        <div className="absolute bg-gradient-to-l from-[#111113] w-[200px] h-full  top-0 left-[32%]"></div>
      </div>

      <div className="ml-14 text-white ">
        <div className="mt-7 flex items-center gap-2">
          <img src="box.png" alt="" className="w-[50px]" />
          <div className="text-left flex flex-col gap-0">
            <p className="font-semibold">Disney + Hoststar</p>
            <p className="text-gray-400 text-[15px]">Endless Enterternment</p>
          </div>
        </div>
        <div className="text-left mt-2 text-[17px] tracking-wide">
            <p>Watch the Best of Entertainment Now! only on Disney+<br/>Hotstar</p>
        </div>

        <div className="text-left mt-7">
            <button className="w-[220px] bg-[#22252d] p-3 rounded-xl font-semibold tracking-wide text-[19px]  ">Subscribe</button>
        </div>
      </div>
      
    </div>
  );
};

export default Poster;
