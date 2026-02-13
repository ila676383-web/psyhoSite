import Slider from "@/components/Slider/Slider";
import frame1 from "../../images/frame1.png";
import frame2 from "../../images/frame2.png";
import frame3 from "../../images/photo1.png";
import frame4 from "../../images/photo2.png";
import frame5 from "../../images/photo3.png";
import SectionMain from "@/components/SectionMain";
import FormBack from "@/components/FormBack";
import diplom1 from "@/images/diplom1.png";
import diplom2 from "@/images/diplom2.png";
import diplom3 from "@/images/diplom3.png";
import diplom4 from "@/images/diplom4.png";
import diplo5 from "@/images/diplom5.png";
import diplom6 from "@/images/diplom6.png";
import diplom7 from "@/images/diplom7.png";
import diplom8 from "@/images/diplom8.png";
import diplom9 from "@/images/diplom9.png";
import office1 from "@/images/office1.png";
import office2 from "@/images/office2.png";
import office3 from "@/images/office3.png";
import office4 from "@/images/office4.png";
import office5 from "@/images/office5.png";
import SectionLead from "@/components/SectionLead";
import Image from "next/image";

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
const slideOffice = [office1, office2, office3, office4, office5];
const page = () => {
  return (
    <main className="relative w-[80%] mx-auto flex flex-col gap-20 ">
      <SectionLead
        head="Психолог онлайн — глубинная работа с мышлением, эмоциями и жизненными сценариями"
        text="Помогаю взрослым людям выйти из кризисов, наладить отношения, повысить уверенность в себе и принять устойчивые решения с помощью психологических консультаций и трансформационных игр."
        image={frame1}
      />
      <Slider
        header={`Место встречи \n уютный кабинет в центре города`}
        slideEducation={slideOffice}
      />
      <section
        className="flex flex-col md:flex-row
      items-center md:justify-between
      2xl:max-w-3/4
      gap-10
      px-3 md:px-12 xl:px-40
      py-8
      mx-auto
      -z-1"
      >
        <div className="w-full md:w-[70%] flex flex-col gap-5 text-left md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-pink-300">
            Услуги психолога онлайн
          </h2>

          <ul className="flex flex-col gap-4">
            <li className="flex flex-col md:flex-row justify-between items-start border-b border-gray-300 pb-4">
              <h3 className="text-2xl">Индивидуальная консультация</h3>
              <p>5 000.00 ₽</p>
            </li>
            <li className="flex flex-col md:flex-row justify-between items-start border-b border-gray-300 pb-4">
              <h3 className="text-2xl">Семейная консультация</h3>
              <p>5 000.00 ₽</p>
            </li>
            <li className="flex flex-col md:flex-row justify-between items-start border-b border-gray-300 pb-4">
              <h3 className="text-2xl">Трансформационная игра в группе</h3>
              <p>5 000.00 ₽</p>
            </li>
            <li className="flex flex-col md:flex-row justify-between items-start border-b border-gray-300 pb-4">
              <h3 className="text-2xl">Т-игра индивидуально</h3>
              <p>5 000.00 ₽</p>
            </li>
            <li className="flex flex-col md:flex-row justify-between items-start border-b border-gray-300 pb-4">
              <h3 className="text-2xl">Семейная т-игра</h3> <p>5 000.00 ₽</p>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[45%] flex justify-center">
          <Image
            className="shadow-lg rounded-2xl w-full max-w-[320px] md:max-w-[350px]"
            src={frame1}
            width={350}
            height={350}
            alt="Психолог онлайн"
          />
        </div>
      </section>
      <SectionMain
        frame={frame3}
        position={"r"}
        head={"Практикующий психолог с системным подходом"}
        text={
          "Я - дипломированный психолог, работаю со взрослыми людьми, которые хотят реальных изменений, а не временного облегчения. В своей практике объединяю классические психологические методы и современные инструменты глубинной трансформации. Мой фокус — причины, а не симптомы. Мы не «гасим эмоции», а разбираем, откуда они возникают и как вы можете управлять своей жизнью осознанно."
        }
      />
      <SectionMain
        frame={frame2}
        position={"l"}
        head={"Что такое трансформационные игры?"}
        text={
          "Мощный способ за короткое время обрести внутренние ресурсы и еще глубже проникнуть в себя. Этот психологический инструмент играючи проведет вас в потаенные уголки внутреннего мира и откроет дорогу в бессознательное. "
        }
      />
      <SectionMain
        frame={frame5}
        position={"r"}
        head={"Подходит каждому, кто готов меняться"}
        text={
          "Дети, подростки и взрослые — психологические игры подходят всем, кто хочет понять себя глубже, справиться с тревогой, повысить самооценку или наладить отношения с близкими."
        }
      />
      <SectionMain
        frame={frame4}
        position={"c"}
        head={"Профессионализм и тепло в каждом сеансе"}
        text={
          "Мой подход основан на опыте и внимательности к вашим уникальным потребностям. Использование игр помогает быстро и безболезненно проходить сложные темы, а поддержка сохраняется после каждой встречи."
        }
      />
      <FormBack />
      <Slider
        header={"Сертификаты и образование"}
        slideEducation={slideEducation}
      />
    </main>
  );
};

export default page;
