"use client";
import React, { useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { useTheme } from "@/context/ThemeProvider";

const Theme = () => {
  //   const [mode, setMode] = useState("light");
  const { mode, setMode } = useTheme();

  const handleTheme = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setMode("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div>
      <button onClick={handleTheme}>
        {mode === "light" ? <MdOutlineWbSunny /> : <IoMoon />}
      </button>
    </div>
  );
};

export default Theme;
