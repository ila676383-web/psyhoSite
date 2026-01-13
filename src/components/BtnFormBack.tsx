"use client";
import Image from "next/image";
import btnForm from "./BtnBack.svg";
import { useState } from "react";
import FormBack from "./FormBack";

const BtnFormBack = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        className="fixed z-20 bottom-7 right-7 bg-transparent animate-bounce "
        onClick={() => setIsActive(true)}
      >
        <Image src={btnForm} alt="call form" width={52} height={52} priority />
      </div>
      {isActive && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center" onClick={()=>setIsActive(false)}>
          <div className="bg-white p-40 rounded-2xl" onClick={(e)=>{e.stopPropagation()}}>
            <FormBack />
          </div>
        </div>
      )}
    </>
  );
};

export default BtnFormBack;
