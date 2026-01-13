'use client'

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const ModalSlider = ({
  img,
  onClose,
}: {
  img: string | StaticImport;
  onClose: () => void
}) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-10 flex justify-center items-center"
      onClick={onClose}
    >
      <Image
        className="rounded-2xl z-20"
        width={1200}
        height={1200}
        alt="education"
        src={img}
      />
    </div>
  );
};

export default ModalSlider;
