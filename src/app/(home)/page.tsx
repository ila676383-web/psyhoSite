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
    <main className="relative  flex flex-col gap-20 ">
      <SectionLead
        head="Запишитесь на консультацию с психологом Ольгой Медведевой"
        text="Начните путь к гармонии и пониманию себя через проверенные
          психологические игры. Заполните форму — и я свяжусь с вами для
          назначения удобного времени."
        image={frame1}
      />
      <SectionMain
        frame={frame1}
        position={"r"}
        head={"Ваш психолог и проводник в мире эмоций"}
        text={
          "Более 10 лет я помогаю людям находить ответы внутри себя через уникальные игровые методы. Моя задача — сделать психологию доступной и понятной, а изменения — реальными и устойчивыми."
        }
      />
      <SectionMain
        frame={frame2}
        position={"l"}
        head={"Игры, которые меняют жизнь"}
        text={
          "Психологические игры — это не просто развлечение, а мощный инструмент для самоисследования и развития. В игровой форме вы сможете увидеть свои внутренние конфликты и найти пути их разрешения без лишнего стресса."
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
        header={"Мои дипломы психолога"}
        slideEducation={slideEducation}
      />
      <FormBack />
    </main>
  );
};

export default page;
