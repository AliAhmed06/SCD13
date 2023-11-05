import { UserButton } from "@clerk/nextjs";
import React from "react";
import Search from "../search/Search";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <div className="bg-red-500 dark:bg-yellow-800 flex items-center py-3 px-20 justify-between">
      <p className="font-bold text-xl text-black dark:text-white">
        Queue Overflow
      </p>
      <Search />
      <div className="flex items-center gap-3">
        <Theme />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
