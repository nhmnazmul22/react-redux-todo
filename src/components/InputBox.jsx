import React from "react";

function InputBox() {
  return (
    <form className="input-box flex flex-col md:flex-row justify-between items-center md:flex-wrap gap-2">
      <input
        type="text"
        placeholder="Your Today Todo's"
        className="outline-none text-sm md:text-lg border-white border-2 bg-transparent rounded py-2 px-2 w-full text-white md:basis-5/6"
      />
      <button
        type="submit"
        className="bg-[#4A65AD] text-white py-2 px-5 rounded-sm text-lg m-auto md:m-0 w-full md:w-auto"
      >
        Add
      </button>
    </form>
  );
}

export default InputBox;
