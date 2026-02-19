import SectionLead from "@/components/SectionLead";
import Slider from "@/components/Slider/Slider";
import diplom1 from "@/images/diplom1.png";
import diplom2 from "@/images/diplom2.png";
import diplom3 from "@/images/diplom3.png";
import diplom4 from "@/images/diplom4.png";
import diplo5 from "@/images/diplom5.png";
import diplom6 from "@/images/diplom6.png";
import diplom7 from "@/images/diplom7.png";
import diplom8 from "@/images/diplom8.png";
import diplom9 from "@/images/diplom9.png";
import frame2 from "../../../images/frame2.png";
import Image from "next/image";
import BtnFormBack from "@/components/BtnFormBack";
import ReviewsListMain from "@/components/ReviewsSection/ReviewsListMain";

const slideEducation = [
  diplom1,
  diplom2,
  diplom3,
  diplom4,
  diplo5,
  diplom6,
  diplom7,
  diplom8,
  diplom9,
];

const page = () => {
  return (
    <main className="container mx-auto w-[80%] flex flex-col gap-28 justify-center items-center py-20 font-sans text-gray-800">
      <SectionLead
        text="Краткий абзац - кто вы, ваш опыт, и почему именно игровой подход помогает клиентам эффективно решать проблемы."
        head="Ольга Медведева - психолог с игровым подходом"
      />

      <section className="w-full max-w-3xl border-b border-pink-300 pb-14">
        <h2 className="text-3xl  mb-8 text-pink-300 tracking-wide">
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
          <div className="relative w-full h-200 rounded-xl overflow-hidden shadow-md">
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

      <section className="w-full py-20  flex flex-col gap-12 justify-center items-center">
        <div className="max-w-7xl  px-4 md:px-8 xl:px-16">
          <div className="max-w-3xl mb-12 mx-auto text-center">
            <h2 className="text-3xl mb-6 tracking-wide">Отзывы клиентов</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Несколько коротких, но искренних отзывов от клиентов, которые
              подчеркнут эффективность моего подхода и результаты, которых они
              достигли.
            </p>
          </div>

          <ReviewsListMain />
        </div>
      </section>

      <Slider header="Мои дипломы психолога" slideEducation={slideEducation} />

      <section className="w-full max-w-3xl border-b border-pink-300 py-14">
        <h2 className="text-3xl text-pink-300  mb-6 tracking-wide">
          Почему я использую психологические игры
        </h2>
        <p className="text-lg leading-relaxed max-w-prose">
          Объяснение, зачем нужны игры в терапии, как они помогают погружаться в
          проблемы без стресса, улучшают понимание себя и дают реальные
          результаты.
        </p>
      </section>

      <section className="w-full max-w-3xl pt-14">
        <h2 className="text-3xl mb-8 tracking-wide">
          Что вы получите, работая со мной
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed max-w-prose">
          <li>Индивидуальный подход, учитывающий ваши потребности</li>
          <li>Комфортная и безопасная атмосфера</li>
          <li>Эффективные методы на основе игр и психологических техник</li>
          <li>Поддержка и сопровождение на протяжении всего процесса</li>
        </ul>
      </section>

      <BtnFormBack />
    </main>
  );
};

export default page;
