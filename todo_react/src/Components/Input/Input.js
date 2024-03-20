import { useState } from "react";

const Input = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const handleGetInputValue = (e) => {
    e.preventDefault();
    if (tasks.every((item) => !(item.task === value))) {
       setTasks([
        ...tasks,
        {
          task: value,
          isCompleted: false,
          time: new Date().toLocaleString(),
          key: value,
        },
      ]);
      localStorage.setItem("task", JSON.stringify(tasks));
      setValue("");
    }
  };

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
