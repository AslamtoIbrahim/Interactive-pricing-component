import React from "react";

type props = {
  value?: number;
  style?: string;
};
function Price({ value = 0, style}: props) {
  return (
    <div className={`flex items-center gap-2 justify-center
                    font-manrope  text-neutral-grayishBlue font-semibold ${style}`}>
      <p className="text-neutral-darkDesaturatedBlue text-[2.5rem] font-bold  ">
        {`${value.toFixed(2)}$ `}
      </p>
      <p>/month</p>
    </div>
  );
}

export default Price;
