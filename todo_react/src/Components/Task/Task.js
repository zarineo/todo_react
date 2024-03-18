const Task = () => {
  return (
    <li class="todo__item">
      <span class="todo__task">Ваша задача</span>
      <span class="todo__action todo__action_complete"></span>
      <span class="todo__action todo__action_delete"></span>
    </li>
  );
};

export default Task;
