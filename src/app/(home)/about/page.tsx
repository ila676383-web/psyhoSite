import SectionLead from "@/components/SectionLead";
import Slider from "@/components/Slider/Slider";
import diplom from "@/components/Slider/diplom.jpeg";
import frame2 from "../../../images/frame2.png";
import Image from "next/image";

const slideEducation = [diplom, diplom, diplom];

const page = () => {
  return (
    <main className="container mx-auto w-[80%] flex flex-col gap-28 justify-center items-center py-20 font-sans text-gray-800">
      <SectionLead
        text="Краткий абзац - кто вы, ваш опыт, и почему именно игровой подход помогает клиентам эффективно решать проблемы."
        head="Ольга Медведева - психолог с игровым подходом"
      />

      <section className="w-full max-w-3xl border-b border-pink-300 pb-14">
        <h2 className="text-3xl font-semibold mb-8 tracking-wide">
          Мой опыт и квалификация
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
          <li>10+ лет практического опыта в психологии</li>
          <li>Специализация на психологических играх и арт-терапии</li>
          <li>
            Сертификаты и курсы повышения квалификации (перечислить важные)
          </li>
          <li>Работа с детьми, подростками и взрослыми</li>
        </ul>
      </section>

      {/* Простая акцентная картинка, не громоздко */}
      <section className="w-full max-w-2xl py-12">
        <section className="w-full max-w-2xl py-12">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={frame2}
              alt="Иллюстрация игрового подхода"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: "cover" }}
              loading="lazy"
              priority={false}
            />
          </div>
        </section>
      </section>

      <Slider header="Мои дипломы психолога" slideEducation={slideEducation} />

      <section className="w-full max-w-3xl border-b border-pink-300 py-14">
        <h2 className="text-3xl font-semibold mb-6 tracking-wide">
          Почему я использую психологические игры
        </h2>
        <p className="text-lg leading-relaxed max-w-prose">
          Объяснение, зачем нужны игры в терапии, как они помогают погружаться в
          проблемы без стресса, улучшают понимание себя и дают реальные
          результаты.
        </p>
      </section>

      <section className="w-full max-w-3xl pt-14">
        <h2 className="text-3xl font-semibold mb-8 tracking-wide">
          Что вы получите, работая со мной
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed max-w-prose">
          <li>Индивидуальный подход, учитывающий ваши потребности</li>
          <li>Комфортная и безопасная атмосфера</li>
          <li>Эффективные методы на основе игр и психологических техник</li>
          <li>Поддержка и сопровождение на протяжении всего процесса</li>
        </ul>
      </section>
    </main>
  );
};

export default page;
