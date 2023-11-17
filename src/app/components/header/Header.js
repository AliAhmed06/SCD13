import React from "react";
import Theme from "./Theme";
import { navItems } from "@/app/constants/constants";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <>
      <div className="bg-gray-300 hidden md:flex text-black dark:text-white dark:bg-black h-[100px]  items-center justify-between px-[100px]">
        <h2>Logo</h2>
        <div className="flex items-center gap-5">
          {navItems.map((item, index) => (
            <Link href={item.url} key={index}>
              {item.title}
            </Link>
          ))}
        </div>
        <Theme />
      </div>
      <MobileNav />
    </>
  );
};

export default Header;
