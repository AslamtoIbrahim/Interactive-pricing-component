"use client";
import React, { useState } from "react";
import Pageviews from "./Pageviews";
import Price from "./Price";
import Slider from "./Slider";
import Switch from "./Switch";
import Dsicount from "./Dsicount";
import Advantages from "./Advantages";
import Button from "./Button";

function Card() {
  const previewsData: Record<number, string> = {
    0: "10K",
    25: "50K",
    50: "100K",
    75: "500K",
    100: "1M",
  };
  const priceData: Record<number, number> = {
    0: 8,
    25: 12,
    50: 16,
    75: 24,
    100: 36,
  };
  const [sliderValue, setsliderValue] = useState(50);
  const handOnchange = (value: number) => {
    setsliderValue(value);
  };
  return (
    <div
      className="absolute top-[23.3125rem] md:top-[20.9375rem] left-[50%] -translate-x-[50%]
                    px-6 md:px-[2.8125rem] py-[4.375rem] md:py-[1.375rem]
                    shadow-2xl shadow-neutral-grayishBlue rounded-md
                    w-[min(100%-3.9375rem,35.75rem)] bg-neutral-white"
    >
      <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-1 items-center justify-center text-center">
        <Pageviews style="" amount={previewsData[sliderValue]} />
        <Price
          style="row-start-3 row-end-4 md:col-start-2 md:row-start-1 md:py-6"
          value={priceData[sliderValue]}
        />
        <Slider
          style="col-start-1 col-end-3"
          value={sliderValue}
          onChange={handOnchange}
        />
      </section>
      <section className="flex items-center justify-end mt-8 gap-4 text-neutral-grayishBlue font-semibold">
        <p>Monthly Billing</p>
        <Switch />
        <p>Yearly Billing</p>
        <Dsicount />
      </section>

      <hr className="my-12"/>
        
      <section className="px-[4.5rem] md:px-4 flex flex-col md:flex-row gap-4 items-center">
        <div className="w-full flex flex-col gap-2">
          <Advantages text="Unlimited websites"/>
          <Advantages text="100% data ownership"/>
          <Advantages text="Email reports"/>
        </div>
        <Button text="Start my trial"/>
      </section>
    </div>
  );
}

export default Card;
