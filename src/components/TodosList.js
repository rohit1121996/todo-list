/** @format */

import React from "react";
import Todo from "./Todo";
export default function TodosList({ isCreated }) {
  const [todos, setTodos] = React.useState([]);
  const fetchTodosData = async () => {
    try {
      const url = "http://localhost:3000/todo";
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      if (res && res.length > 0) {
        setTodos(() => [...res]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      //
    }
  };
  React.useEffect(() => {
    fetchTodosData();
  }, [isCreated]);
  return (
    <div className="mt-3">
      <div className="p-1">
        {todos.map((ele) => (
          <Todo key={ele.id} data={ele} />
        ))}
      </div>
    </div>
  );
}
