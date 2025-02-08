import React from "react";

type props = {
  amount?: string;
  style?:string;
};
function Pageviews({ amount = '0k' , style}: props) {
  return (
    <div className={style}>
      <p className="font-manrope uppercase tracking-wider text-neutral-grayishBlue font-semibold ">{`${amount} Pageviews`}</p>
    </div>
  );
}

export default Pageviews;
