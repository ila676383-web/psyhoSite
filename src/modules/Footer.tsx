
import MouseBackground from "@/components/MouseBackground";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-screen mt-50 h-125 mask-t-to-transparent flex items-center justify-center relative">
      <MouseBackground />
      <Link target="_blank" href="https://creatorlabs-psi.vercel.app/" className="text-2xl font-bold text-black ">
        Сайт разработан с любовью ❤️
      </Link>
    </footer>
  );
};

export default Footer;
