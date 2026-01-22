"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import icon from "../../public/icon.jpg";
import { useState } from "react";

const navigateHeader = [
  { name: "Главная", link: "/" },
  { name: "Обо мне", link: "/about" },
  { name: "Игры", link: "/games" },
  { name: "Библиотека", link: "/lib" },
];

const Header = () => {
  const pathname = usePathname();
  const [isNav, setIsNav] = useState(false);

  return (
    <header className="w-screen p-5 mb-20  md:px-15 2xl:px-40 flex items-center justify-between bg-transparent">
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
      <nav className="md:hidden" onClick={() => setIsNav((prev) => !prev)}>
        {!isNav && <h2 className="font-bold uppercase">menu</h2>}
        {isNav && (
          <div className="flex flex-col fixed right-5 z-50 bg-white/50 p-2 rounded-2xl top-15">
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
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
