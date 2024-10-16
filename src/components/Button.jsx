import React from "react";

function Button({text}) {
  return (
    <button
      type="button"
      className="bg-white h-10 sm:h-full px-6 rounded-sm text-sm sm:text-xl basis-3/6  sm:w-auto"
    >
      {text}
    </button>
  );
}

export default Button;