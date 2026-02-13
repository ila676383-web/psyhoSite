import LeadStair from "@/modules/Sections/LeadStair";

import GameSection from "@/components/GamesSections/GameSection";
const page = () => {
  return (
    <main
      className="container w-[80%] mx-auto min-h-screen flex flex-col jus gap-20   \
     "
    >
      <LeadStair />
      <GameSection/>
    </main>
  );
};

export default page;
