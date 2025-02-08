import React from "react";

type props = {
  text?: string;
};
function Button({ text }: props) {
  return (
    <button
      className="w-full text-neutral-toggleBg font-manrope bg-neutral-darkDesaturatedBlue
                 py-3 px-4  rounded-full opacity-95 hover:opacity-100 hover:text-neutral-veryPaleBlue"
    >
      {text}
    </button>
  );
}

export default Button;
