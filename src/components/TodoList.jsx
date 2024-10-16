import React from "react";
import List from "./List";

function TodoList() {
  return (
    <ul className="todo-list px-2 overflow-y-auto h-[340px] mt-8">
      <List button={true} />
    </ul>
  );
}

export default TodoList;
