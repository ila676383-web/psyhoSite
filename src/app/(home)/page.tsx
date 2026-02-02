import Slider from "@/components/Slider/Slider";
import frame1 from "../../images/frame1.png";
import frame2 from "../../images/frame2.png";
import SectionMain from "@/components/SectionMain";
import FormBack from "@/components/FormBack";
import diplom from "@/components/Slider/diplom.jpeg";
import SectionLead from "@/components/SectionLead";

const slideEducation = [diplom, diplom, diplom];
const page = () => {
  return (
    <main className="relative w-[80%] mx-auto flex flex-col gap-20 ">
      <SectionLead
        head="Психолог онлайн — глубинная работа с мышлением, эмоциями и жизненными сценариями"
        text="Помогаю взрослым людям выйти из кризисов, наладить отношения, повысить уверенность в себе и принять устойчивые решения с помощью психологических консультаций и трансформационных игр."
        image={frame1}
      />
      <SectionMain
        frame={frame1}
        position={"r"}
        head={"Практикующий психолог с системным подходом"}
        text={
          "Я - дипломированный психолог, работаю со взрослыми людьми, которые хотят реальных изменений, а не временного облегчения. В своей практике объединяю классические психологические методы и современные инструменты глубинной трансформации. Мой фокус — причины, а не симптомы. Мы не «гасим эмоции», а разбираем, откуда они возникают и как вы можете управлять своей жизнью осознанно."
        }
      />
      <section>
        {/* Услуги скоро будут доступны */}
      </section>

      <SectionMain
        frame={frame2}
        position={"l"}
        head={"Что такое трансформационные игры?"}
        text={
          "Это психологический инструмент, который помогает увидеть скрытые причины повторяющихся проблем и изменить внутренние установки через игровой формат."
        }
      />

      <SectionMain
        frame={frame1}
        position={"r"}
        head={"Подходит каждому, кто готов меняться"}
        text={
          "Дети, подростки и взрослые — психологические игры подходят всем, кто хочет понять себя глубже, справиться с тревогой, повысить самооценку или наладить отношения с близкими."
        }
      />
      <SectionMain
        frame={frame1}
        position={"c"}
        head={"Профессионализм и тепло в каждом сеансе"}
        text={
          "Мой подход основан на опыте и внимательности к вашим уникальным потребностям. Использование игр помогает быстро и безболезненно проходить сложные темы, а поддержка сохраняется после каждой встречи."
        }
      />
      <Slider
        header={"Сертификаты и образование"}
        slideEducation={slideEducation}
      />
      <FormBack />
    </main>
  );
};

export default page;
