"use client";
import Image from "next/image";
import btnForm from "../../public/btnBack.svg";

import FormBack from "./FormBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setIsActive } from "@/slices/form.slice";

const BtnFormBack = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state: RootState) => state);
  return (
    <>
      <div
        className="fixed z-20 bottom-7 right-7 bg-transparent animate-bounce "
        onClick={() => dispatch(setIsActive(true))}
      >
        <Image src={btnForm} alt="call form" width={52} height={52} priority />
      </div>
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

export default BtnFormBack;
