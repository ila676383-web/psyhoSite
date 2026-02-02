"use client";

import { RootState } from "@/app/store";
import FormBack from "./FormBack";
import { useDispatch, useSelector } from "react-redux";
import { setIsActive } from "@/slices/form.slice";

const BtnLead = ({ buttonText }: { buttonText: string }) => {
const dispatch = useDispatch()
const isActive = useSelector((state: RootState)=> state.form.value)
  return (
    <>
      <button
        className="bg-gray-300 p-2 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-transform ease-in-out duration-500"
        onClick={() => {
          dispatch(setIsActive(true));
        }}
      >
        {buttonText}
      </button>
      {isActive && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center"
          onClick={() => dispatch(setIsActive(false))}
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
