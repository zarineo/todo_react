import { useState } from "react";
import { useEffect } from "react";

const Input = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  );

  const [value, setValue] = useState("");

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const handleGetInputValue = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { task: value, isCompleted: false, time: new Date().toLocaleString() },
    ]);
    localStorage.setItem("task", JSON.stringify(tasks));
    setValue("");
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todo__input">
      <input
        className="todo__text"
        type="text"
        value={value}
        onChange={changeValue}
      />
      <button className="todo__add" onClick={handleGetInputValue}></button>
    </div>
  );
};

export default Input;
