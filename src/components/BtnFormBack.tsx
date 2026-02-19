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
        aria-label="Открыть форму"
        className="
          fixed bottom-6 right-6 z-40
          flex items-center justify-center
          w-14 h-14
          rounded-full
          bg-pink-500
          text-white
          shadow-[0_8px_40px_rgba(236,72,153,0.45)]
          transition
          hover:scale-110 hover:bg-pink-400
          active:scale-95
        "
      >
        {/* Glow */}
        <span
          className="
            absolute -inset-1
            rounded-full
            bg-pink-500/40
            blur-xl
            -z-10
          "
        />

        {/* Icon */}
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
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
