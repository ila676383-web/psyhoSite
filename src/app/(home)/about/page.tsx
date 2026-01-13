import Slider from "@/components/Slider/Slider"
import diplom from '@/components/Slider/diplom.jpeg'

const slideEducation = [diplom, diplom, diplom]
const page = () => {

  return (
    <main>
      <Slider header={'header'} slideEducation={slideEducation}/>
    </main>
  );
}

export default page