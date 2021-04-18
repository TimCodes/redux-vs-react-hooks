import React, { useState } from "react";
import Tabs from "./Tabs";
import TodoHoooks from "./Todo-Hooks";
import "./style.css";

const tabTexts = ["apple", "orange", "pizza"];
const todos = [
  {
    id: 0,
    text: "get really good at git",
    isComplete: false
  },
  {
    id: 1,
    text: "learn azure",
    isComplete: false
  },
  {
    id: 2,
    text: "learn Java",
    isComplete: false
  }
];
export default function App() {
  return (
    <div>
      <Tabs tabLabels={tabTexts}>
        <div>Apples</div>
        <div>Oranges</div>
        <TodoHoooks todos={todos} />
      </Tabs>
    </div>
  );
}
