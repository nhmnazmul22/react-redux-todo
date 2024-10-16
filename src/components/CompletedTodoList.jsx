import React from "react";
import List from "./List";

function CompletedTodoList() {
  return (
    <ul className="todo-list bg-[#030A1C] px-2 h-[160px] mt-2 ring-4 p-1 shadow-2xl">
      <List button={false} />
    </ul>
  );
}

export default CompletedTodoList;
