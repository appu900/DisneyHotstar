import React from "react";

const SearchCard = ({mvy,title}) => {
  return <div className="max-w-[197px] max-h-[250px] cursor-pointer"> 
   <div className="w-full h-full">
      <img src={mvy.Poster} alt="" className="w-full h-full rounded-md object-cover" />
   </div>
  </div>;
};

export default SearchCard;
