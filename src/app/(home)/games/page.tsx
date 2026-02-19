import LeadStair from "@/modules/Sections/LeadStair";
import BtnFormBack from "@/components/BtnFormBack";
import BtnContact from "@/components/BtnContact";
import GameLoad from "@/components/GameLoad/GameLoad";
const page = () => {
  return (
    <main
      className="container w-[80%] mx-auto min-h-screen flex flex-col jus gap-20 "
    >
      <LeadStair />
      <GameLoad/>
      <BtnFormBack />
      <BtnContact />
    </main>
  );
};

export default page;
