//import { useState, useEffect } from "react";
const Select = ({ tasks, setTasks, value, setValue }) => {

  const selectTasks = (e) => {
    console.log(value);
    setValue(e.target.value);
  };
  return (
    <select className="todo__options" value={value} onChange={selectTasks}>
      <option value="all">все</option>
      <option value="active">активные</option>
      <option value="completed">завершённые</option>
    </select>
  );
};

export default Select;
