import React from "react";
import { useContext } from "react";
import AppContext from "../AppContext";

const Header = ({ title }) => {
  const { hardMode, setHardMode } = useContext(AppContext);

  const handleToggleHardMode = () => {
      setHardMode(!hardMode);
      localStorage.setItem("hardMode", !hardMode);
  };

  return (
    <nav className="fixed top-0 p-3 bg-gray-800 w-full text-center items-center border-b justify-between">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <h1 className="text-center text-3xl font-bold">{title}</h1>
        <div>
          <button
            onClick={handleToggleHardMode}
            className={
              hardMode
                ? "bg-red-900 text-white p-1 md:p-2 md:mt-4 rounded"
                : "bg-gray-600 text-white p-1 md:p-2 md:mt-4 rounded opacity-40"
            }
          >
            Cammie Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
