import React from "react";
import Card from "./card/Card";

function Main() {
  return (
    <div className="relative w-full h-full bg-neutral-veryPaleBlue font-manrope">
      <div className="bg-circles bg-no-repeat bg-center
                      flex flex-col justify-center items-center gap-6 text-center 
                      h-[27rem] md:h-[28.3125rem] bg-neutral-lightGrayishBlue rounded-bl-[10.9375rem]">
        <h1 className="px-8 text-[2.125rem] md:text-[1.875rem] text-neutral-darkDesaturatedBlue font-bold">Simple, traffic-based pricing</h1>
        <p className="px-12 text-15 md:text-8 text-neutral-grayishBlue">Sign-up for our 30-day trial. No credit card required. </p>
      </div>
      <Card />
    </div>
  );
}

export default Main;
