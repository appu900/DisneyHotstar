import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { add } from "../Store/WatchListSlice";
import { useDispatch } from "react-redux";
import { sendVideo } from "../Store/redirectSlice";

const Longcard = ({ mvy, mvytitle }) => {
  const [icc, seticc] = useState(
    <ion-icon name="add-outline"></ion-icon>
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleWatchListTarget() {
    dispatch(add(mvy));
    seticc(<ion-icon name="checkmark-outline"></ion-icon>)
  }
  const handleRedirectTowatchPage = (item)=>{
    dispatch(sendVideo(item));
    navigate("/watch")
  }
  return (
    <div className="min-w-[200px] min-h-[250px] cursor-pointer hover:scale-110 hover:ml-1 hover:mr-1  hover:rounded-lg transition-all relative duration-300">
      <div className="w-full h-full ">
        <img
          src={`https://image.tmdb.org/t/p/original/${mvy?.backdrop_path}`}
          alt=""
          className="w-full h-full rounded-md object-cover hover:rounded-lg hover:shadow-2xl"
        />
      </div>
      <div className="absolute w-full h-full top-0 bg-gray-900 hover:opacity-100  opacity-0">
        <img
          src={`https://image.tmdb.org/t/p/original/${mvy?.backdrop_path}`}
          alt=""
        />
        <p className="text-sm font-semibold mt-2 ml-2 text-white">
          {mvy.title}
        </p>
        <div className="w-full flex items-center gap-2">
          <div
            className="w-[150px] h-[30px] border mt-3 ml-2 rounded p-4 bg-white text-black flex justify-evenly items-center tracking-tight font-semibold
         text-sm mb-4 opacity-75"
            onClick={(e) => handleRedirectTowatchPage(mvy)}
          >
            Watch now
          </div>
          <div
            className="w-[34px] mr-1 mb-1 h-[34px] relative  rounded bg-gray-700 text-white flex justify-evenly"
            onClick={(e) => handleWatchListTarget(mvy)}
          >
            <span className="mt-[6px]">
              {/* <ion-icon name="add-outline"></ion-icon> */}
              {icc}
            </span>
          </div>
        </div>
      </div>
      {/* <div className="h-[40px] w-full border">
          <p>{mvy.original_language}</p>
        </div> */}
    </div>
  );
};

export default Longcard;
