import frame1 from "../../images/frame1.png";
import frame2 from "../../images/frame2.png";
import SectionMain from "@/components/SectionMain";

const page = () => {
  return (
    <main className="relative left-10 bottom-10 -z-1 flex flex-col gap-20 ">
      <SectionMain
        frame={frame1}
        position={"r"}
        head={"КАБИНЕТ ПСИХОЛОГА"}
        text={
          "Важно помнить: когда дело касается вашего благополучия, обращение за помощью – это знак силы, а не слабости."
        }
      />
      <SectionMain
        frame={frame2}
        position={"l"}
        head={"Особенности консультации"}
        text={
          "В рамках работы с психологом предусмотрена диагностика эмоционального состояния пациента. Она рассчитана на выявление различных отклонений или проблем восприятия человеком окружающего мира. За услугой психологической реабилитации обращаются люди, пережившие сильный стресс или душевное потрясение."
        }
      />
    </main>
  );
};

export default page;
