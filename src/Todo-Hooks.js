import React, { useState } from "react";

const Todo = ({ todo, onTodoChange, onTodoDelete, onCompleteChange }) => {
  return (
    <li>
      {" "}
      <input
        value={todo.text}
        onChange={evt => onTodoChange(todo, evt.target.value)}
      />{" "}
      <input
        type="checkbox"
        value={todo.isComplete}
        onChange={e => onCompleteChange(e, todo.id)}
      />
      <button onClick={() => onTodoDelete(todo.id)}> X </button>
      {todo.text}{" "}
    </li>
  );
};

function TodoHoooks({ todos = [] }) {
  const [rawTodos, setRawTodos] = useState(() => todos);
  const [filter, setFilter] = useState("all");
  const [text, setText] = useState("");

  const filteredTodos = rawTodos.filter(todo => {
    if (filter === "uncomplete") {
      return todo.isComplete === false;
    }
    if (filter === "complete") {
      return todo.isComplete === true;
    }
    return todo;
  });

  const updateTodoText = ({ id, text }, newText) => {
    const updatedTodos = rawTodos.map(todo => {
      if (todo.id !== id) {
        return todo;
      }
      return { ...todo, text: newText };
    });
    setRawTodos(updatedTodos);
  };

  const handleChange = e => setText(e.target.value);

  const addTodo = text => {
    const todo = { text, id: rawTodos.length, isComplete: false };
    const newTodos = [...rawTodos, todo];
    setRawTodos(newTodos);
  };

  const deleteTodo = id => {
    const newTodos = rawTodos.filter(todo => todo.id !== id);
    setRawTodos(newTodos);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(text);
  };

  const updateTodoCompleted = (e, id) => {
    const checked = e.target.checked;
    console.log(checked);
    const updatedTodos = rawTodos.map(todo => {
      if (todo.id !== id) {
        return todo;
      }
      return { ...todo, isComplete: checked };
    });
    setRawTodos(updatedTodos);
  };

  return (
    <>
      <div>
        {" "}
        <input value={text} onChange={handleChange} />
        <button onClick={handleSubmit}> Add </button>{" "}
        <select
          value={filter}
          onChange={e => {
            setFilter(e.target.value);
          }}
        >
          <option value="all">all</option>
          <option value="complete">complete</option>
          <option value="uncomplete">uncomplete</option>
        </select>
      </div>
      <ul>
        {filteredTodos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onTodoChange={updateTodoText}
              onTodoDelete={deleteTodo}
              onCompleteChange={updateTodoCompleted}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoHoooks;
