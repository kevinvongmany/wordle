import React from "react";

const HardModeInfo = () => {
return (
    <div className="relative cursor-pointer">
        <div className="absolute top-0 left-0 mt-12 p-3 bg-black border border-gray-300 shadow-lg w-128 md:w-256">
            Any revealed hints (yellow or green guesses) must be used in subsequent guesses
        </div>
    </div>
);
};

export default HardModeInfo;
