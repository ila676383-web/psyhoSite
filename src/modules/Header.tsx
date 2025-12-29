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
    <header className="relative p-5 mx-20 flex flex-1 bg-transparent items-center justify-between ">
      <div className=" flex items-end gap-2 ">
        <Image
          className="rounded-4xl "
          src={icon}
          width={50}
          height={50}
          alt="logo"
        />
        <h1 className="text-2xl font-extrabold font-stretch-50% textTyping">
          Ольга Медведева
        </h1>
      </div>

      <nav className="flex justify-between items-center p-2 gap-7">
        {navigateHeader.map((item, id) => (
          <Link
            className={`text-2xl font-bold font-stretch-75% uppercase transition-transform ease-in-out duration-300 hover:scale-105 active:scale-95 ${
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
