/** @format */
import React from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodosList from "./components/TodosList";
import Navbar from "./components/Navbar";

function App() {
  const [isCreated, setIsCreated] = React.useState(false);
  return (
    <>
      <Navbar />
      <div className="container">
        <CreateTodo setIsCreated={setIsCreated} />
        <TodosList isCreated={isCreated} />
      </div>
    </>
  );
}

export default App;
