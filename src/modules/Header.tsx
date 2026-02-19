"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import icon from "../../public/icon.jpg";
import { useState } from "react";

const navigateHeader = [
  { name: "Главная", link: "/" },
  { name: "Обо мне", link: "/about" },
  { name: "Т-Игры", link: "/games" },
  { name: "Библиотека", link: "/libs" },
];

const Header = () => {
  const pathname = usePathname();
  const [isNav, setIsNav] = useState(false);

  return (
    <header className="w-full p-5 mb-20  md:px-15 2xl:px-40 flex items-center justify-between bg-transparent">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          className="rounded-4xl"
          src={icon}
          width={50}
          height={50}
          alt="logo"
        />
        <h1 className="font-bold uppercase font-stretch-85% 2xl:font-stretch-75% textTyping">
          Ольга Медведева
        </h1>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-7 text-sm lg:text-[20px] 2xl:text-3xl">
        {navigateHeader.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className={`font-bold uppercase font-stretch-75% transition-transform duration-300 hover:scale-105 active:scale-95 ${
              pathname === item.link ? "animate-bounce" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile burger */}
      <div className="md:hidden" onClick={() => setIsNav((prev) => !prev)}>
        {!isNav && <h2 className="font-bold uppercase">menu</h2>}
        {isNav && (
          <nav onClick={(e)=>{e.stopPropagation()}}  className="flex flex-col fixed gap-2 top-0 left-0 w-full h-screen bg-black/90 items-center justify-center text-2xl z-50">
            {navigateHeader.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={()=>{setIsNav(false)}}
                className={` text-white font-bold uppercase font-stretch-75% transition-transform duration-300 hover:scale-105 active:scale-95 ${
                  pathname === item.link ? "animate-bounce" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              className="
    absolute right-4 top-4
    inline-flex h-8 w-8 items-center justify-center
    rounded-md
    text-gray-500
    hover:bg-gray-100 hover:text-gray-900
    focus:outline-none focus:ring-2 focus:ring-gray-400
  "
              aria-label="Закрыть"
              onClick={(e) => {
                e.stopPropagation();
                setIsNav(false);
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M6 6L18 18M18 6L6 18" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
