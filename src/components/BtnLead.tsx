"use client";
import React, { useState } from "react";
import ModalSlider from "./Slider/ModalSlider";
import FormBack from "./FormBack";

const BtnLead = ({ buttonText }: { buttonText: string }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button
        className="bg-gray-300 p-2 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-transform ease-in-out duration-500"
        onClick={() => {
          setIsActive(true);
        }}
      >
        {buttonText}
      </button>
      {isActive && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center"
          onClick={() => setIsActive(false)}
        >
          <div
            className="bg-white p-40 rounded-2xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <FormBack />
          </div>
        </div>
      )}
    </>
  );
};

export default BtnLead;
