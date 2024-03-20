import { useState, useEffect } from "react";
import Task from "../Task/Task";

const Container = ({ tasks, setTasks, renderTasks, setRendertasks }) => {

  return (
    <ul className="todo__items">
      {renderTasks.map(({ task, isCompleted, time, key }) => (
        <Task
          task={task}
          time={time}
          isCompleted={isCompleted}
          setTasks={setTasks}
          tasks={tasks}
          key={task}
        />
      ))}
    </ul>
  );
};

export default Container;
