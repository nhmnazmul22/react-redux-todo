import React from "react";
import Button from "./Button";

function List({ button }) {
  return (
    <li className="flex justify-between flex-col sm:flex-row items-center h-auto sm:h-12 gap-3 mt-5">
      <div
        className={`todo-box ${
          !button ? "w-full" : "w-full sm:basis-9/12"
        } bg-[#4A65AD] px-2 h-12 sm:h-full rounded-sm flex justify-start items-center gap-3`}
      >
        <input type="radio" className="w-5 h-5" />
        <input
          type="text"
          value="Todo 1"
          readOnly
          className="bg-transparent text-white outline-none text-lg"
        />
      </div>
      {button ? (
        <div className="flex justify-between h-12 sm:h-full gap-4 w-full sm:w-auto">
          <Button text="✏️" />
          <Button text="❌" />
        </div>
      ) : (
        ""
      )}
    </li>
  );
}

export default List;
