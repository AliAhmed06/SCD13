"use client";
import { useTheme } from "@/context/ThemeProvider";
import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const Theme = () => {
  const { mode, setMode } = useTheme();

  const themeHandler = () => {
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
      <button onClick={themeHandler}>
        {mode === "light" ? <BsMoon size={25} /> : <BsSun size={25} />}
      </button>
    </div>
  );
};

export default Theme;
