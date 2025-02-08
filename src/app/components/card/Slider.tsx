"use client";
import React, { useEffect, useRef } from "react";
import "./Slider.css";

type props = {
  value?: number;
  onChange?: (value: number) => void;
  style?:string;
};
function Slider({ value = 0, onChange , style}: props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value.toString();
    }
  }, [value]);

  const handleSliderChange = () => {
    const input = parseFloat(inputRef.current?.value || "0");
    if (onChange) {
      onChange(input);
    }
  };
  const trackColor = `linear-gradient(90deg, hsl(174, 77%, 80%) ${value}%, transparent ${value}%)`;
  return (
    <div className={style}>
      <input
        ref={inputRef}
        className="w-full h-4 appearance-none bg-neutral-toggleBg rounded-lg outline-none cursor-pointer focus:outline-none  "
        type="range"
        min={0}
        max={100}
        step={25}
        onChange={handleSliderChange}
        style={{ background: trackColor }}
      />
    </div>
  );
}

export default Slider;
