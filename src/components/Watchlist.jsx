import React from "react";
import { useSelector } from "react-redux";
import Longcard from "./Longcard";
import WatchListCard from "./WatchListCard";

const Watchlist = () => {
  const data = useSelector((state) => state.WatchList);
  const Reversedata = data.map((item) => item).reverse();

  return (
    <div className=" mt-5 h-auto overflow-scroll scrollbar-hide">
      <p className="text-xl font-semibold">Watchlist</p>
      <div className="mt-5 flex gap-4">
        {Reversedata.map((mvy) => (
          <WatchListCard movie={mvy} />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
