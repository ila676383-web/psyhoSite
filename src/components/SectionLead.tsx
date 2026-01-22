import { StaticImport } from "next/dist/shared/lib/get-img-props";
import BtnLead from "./BtnLead";

interface SectionLeadProps {
  head: string;
  text: string;
  image?: string | StaticImport;
  buttonText?: string;
}

const SectionLead = ({
  head,
  text,
  buttonText = "Записаться",
}: SectionLeadProps) => {
  return (
    <section className="mx-auto relative p-4 py-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-10 md:gap-20 max-w-7xl">
      <div className="absolute bg-gray-300/30 w-[90%] mx-[5%] rounded-2xl h-full top-0 left-0 -z-10"></div>
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl font-bold mb-6">{head}</h1>
        <p className="mb-8 text-lg leading-relaxed">{text}</p>
        <BtnLead buttonText={buttonText} />
      </div>
      {/* Если в будущем нужно добавить картинку, можно её здесь разместить */}
    </section>
  );
};

export default SectionLead;
