"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import icon from "../../public/icon.jpg";

const navigateHeader: { name: string; link: string }[] = [
  { name: "Главная", link: "/" },
  { name: "Обо мне", link: "/about" },
  { name: "Игры", link: "/games" },
  { name: "Библиотека", link: "/lib" },
  { name: "Дополнительно", link: "/more" },
];
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="p-5 mx-15 mb-20 2xl:mx-40 flex flex-1 xl:gap-10 bg-transparent items-center justify-between md:text-sm lg:text-[20px] 2xl:text-3xl">
      <div className=" flex items-center gap-2">
        <Image
          className="rounded-4xl "
          src={icon}
          width={50}
          height={50}
          alt="logo"
        />
        <h1 className=" font-bold uppercase font-stretch-85% 2xl:font-stretch-75% textTyping">
          Ольга Медведева
        </h1>
      </div>

      <nav className="flex flex-1 flex-nowrap justify-end items-center p-2 lg:gap-7    md:gap-3 sm:gap-2">
        {navigateHeader.map((item, id) => (
          <Link
            className={`font-bold text-nowrap font-stretch-75% uppercase transition-transform ease-in-out duration-300 hover:scale-105 active:scale-95 ${
              pathname === item.link && "animate-bounce"
            }`}
            key={id}
            href={item.link}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
