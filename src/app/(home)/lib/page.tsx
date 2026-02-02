import CategoryLibs from "@/modules/Sections/CategoryLibs";
import LibList from "@/modules/Sections/LibList";

const page = () => {
  return (
    <main className="flex w-screen min-h-screen flex-col gap-10 p-20  items-center  ">
      <CategoryLibs />
      <LibList />
    </main>
  );
};

export default page;
