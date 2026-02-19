"use client";

import { useState } from "react";

const BtnContact = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* CONTACT CARD */}
      {isActive && (
        <div
          className="
            fixed bottom-44 right-6 z-40
            w-72
            rounded-2xl
            bg-white/[0.08]
            backdrop-blur-xl
            border border-white/10
            shadow-[0_20px_60px_rgba(236,72,153,0.35)]
            p-4
            animate-[fade-up_0.25s_ease-out]
          "
        >
          {/* Phone */}
          <a
            href="tel:+7973764637"
            className="
              flex items-center gap-3
              rounded-xl
              px-4 py-3
              text-black
              hover:bg-white/[0.08]
              transition
            "
          >
            <span className="text-pink-400">📞</span>
            <span className="font-medium">
              +7 973 764-63-37
            </span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/olga_medvedeva_psychologist"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-2
              flex items-center gap-3
              rounded-xl
              px-4 py-3
              text-black
              hover:bg-white/[0.08]
              transition
            "
          >
            <span className="text-pink-400">✈️</span>
            <span>Группа в Telegram</span>
          </a>
        </div>
      )}

      {/* MAIN BUTTON */}
      <button
        onClick={() => setIsActive((prev) => !prev)}
        aria-label="Контакты"
        className="
          fixed bottom-26 right-6 z-30
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

        {isActive ? (
          /* Close */
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
          /* Phone */
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.12.81.3 1.6.57 2.35a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 4 4l.91-1.3a2 2 0 0 1 2.11-.45c.75.27 1.54.45 2.35.57A2 2 0 0 1 22 16.92z" />
          </svg>
        )}
      </button>
    </>
  );
};

export default BtnContact;
