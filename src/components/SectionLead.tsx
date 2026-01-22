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
    <section
      className="mx-auto relative p-4 py-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-10 md:gap-20 max-w-7xl
    border-4 border-pink-300 bg-gray-300/30 shadow transition-shadow duration-300 ease-in-out hover:shadow-[0_0_15px_5px_rgba(219,39,119,0.6)] rounded-2xl"
    >
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
