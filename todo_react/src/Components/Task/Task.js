const Task = ({ task, isCompleted, time, key, setTasks, tasks }) => {
  const deleteTask = () => {
    setTasks(tasks.filter((item) => item.task !== task));
  };

  const completedTasks = () => {
    setTasks([
      ...tasks.filter((item) => item.task !== task),
      {
        task: task,
        isCompleted: !isCompleted,
        time: new Date().toLocaleString(),
        key: task,
      },
    ]);
  };
  
  return (
    <li className={"todo__item" + (isCompleted ? " completed" : "")}>
      <span className="todo__task">{task}</span>
      <span className="todo__date">{time}</span>
      <span
        className="todo__action todo__action_complete"
        onClick={completedTasks}
      ></span>
      <span
        className="todo__action todo__action_delete"
        onClick={deleteTask}
      ></span>
    </li>
  );
};

export default Task;
