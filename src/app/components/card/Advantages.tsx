import React from "react";
import Image from "next/image";
import checkImage from "../../../../public/images/icon-check.svg";

type props = {
  text?: string;
};
function Advantages({ text }: props) {
  return (
    <div className="flex items-center justify-center md:justify-start gap-3 text-neutral-grayishBlue font-manrope">
      <Image src={checkImage} alt="check icon" />
      <p>{text}</p>
    </div>
  );
}

export default Advantages;
