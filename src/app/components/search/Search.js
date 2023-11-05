import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="bg-gray-300 grow max-w-[600px] rounded-md h-[40px] flex items-center p-5 gap-5">
      <AiOutlineSearch size={20} />
      <input
        type="text"
        className="w-full py-1 outline-none rounded-md px-5 bg-transparent "
      />
    </div>
  );
};

export default Search;
