"use client";

import Image from "next/image";
import btnForm from "../../public/btnBack.svg";
import FormBack from "./FormBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setIsActive } from "@/slices/form.slice";

const BtnFormBack = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state: RootState) => state.form.value);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => dispatch(setIsActive(true))}
        className="
          fixed bottom-6 right-6 z-30
          rounded-full
          transition-transform duration-300
          hover:scale-110
          active:scale-95
        "
        aria-label="Открыть форму обратной связи"
      >
        <Image src={btnForm} alt="call form" width={56} height={56} priority />
      </button>

      {/* Modal */}
      {isActive && (
        <div
          className="
            fixed inset-0 z-40
            bg-black/50 backdrop-blur-sm
            flex items-center justify-center
            px-4
          "
          onClick={() => dispatch(setIsActive(false))}
        >
          <div
            className="
              w-full max-w-lg
              bg-white rounded-2xl
              p-6 md:p-10
              shadow-2xl
              animate-fadeIn
            "
            onClick={(e) => e.stopPropagation()}
          >
            <FormBack />
          </div>
        </div>
      )}
    </>
  );
};

export default BtnFormBack;
