import React from "react";

function TodoRedux(todos = []) {
  return (
    <ul>
      {todos.map(todo => {
        return <li>{todo.text}</li>;
      })}
    </ul>
  );
}

export default TodoRedux;
